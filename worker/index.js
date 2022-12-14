/* eslint-disable no-undef */
self.__WB_DISABLE_DEV_LOGS = true;

import { getScope } from '../src/api/utils';

const firstWindowClient = () => {
  return clients.matchAll({ type: 'window' }).then(function (windowClients) {
    return windowClients.length
      ? windowClients[0]
      : Promise.reject('No clients');
  });
};

self.addEventListener('push', function (event) {
  const data = event?.data?.json();
  data &&
    event.waitUntil(
      registration.showNotification(data.title, {
        body: data.message,
        icon: `${getScope()}/icons/icon-192x192.png`,
        badge: `${getScope()}/icons/icon-72x72.png`,
        data: {
          options: {
            action: 'default',
            close: true,
            notificationCloseEvent: false,
            url: `${self.location.origin}${getScope()}/`,
          },
        },
      })
    );
});

self.addEventListener('notificationclick', function (event) {
  let notification = event.notification;

  // eslint-disable-next-line no-prototype-builtins
  if (!notification.data.hasOwnProperty('options')) return;

  let options = notification.data.options;

  // Close the notification if the setting has been set to do so.

  if (options.close) event.notification.close();

  let promise = Promise.resolve();

  // Available settings for |options.action| are:
  //
  //    'default'      First try to focus an existing window for the URL, open a
  //                   new one if none could be found.
  //
  //    'focus-only'   Only try to focus existing windows for the URL, don't do
  //                   anything if none exists.
  //
  //    'message'      Sends a message to all clients about this notification
  //                   having been clicked, with the notification's information.
  //
  //    'open-only'    Do not try to find existing windows, always open a new
  //                   window for the given URL.
  //
  //    'open-only-*'  Always open a new window for a given URL, which is a
  //                   non-HTTP/HTTPS protocol link.
  //

  if (options.action == 'message') {
    firstWindowClient().then(function (client) {
      let message = 'Clicked on "' + notification.title + '"';
      if (event.action || event.reply) {
        message += ' (action: "' + event.action + '", reply: ';
        message += event.reply === null ? 'null' : '"' + event.reply + '"';
        message += ')';
      }
      client.postMessage(message);
    });

    return;
  }

  if (options.action == 'default' || options.action == 'focus-only') {
    promise = promise
      .then(function () {
        return firstWindowClient();
      })
      .then(function (client) {
        return client.focus();
      });
    if (options.action == 'default') {
      promise = promise.catch(function () {
        clients.openWindow(options.url);
        // clients.openWindow(document?.location?.toString());
      });
    }
  } else if (options.action == 'open-only-tel') {
    promise = promise.then(function () {
      clients.openWindow('tel:+12025550108');
    });
  } else if (options.action == 'open-only-mailto') {
    promise = promise.then(function () {
      clients.openWindow('mailto:fake@example.com');
    });
  } else if (options.action == 'open-only') {
    promise = promise.then(function () {
      clients.openWindow(options.url);
    });
  }

  event.waitUntil(promise);
});
