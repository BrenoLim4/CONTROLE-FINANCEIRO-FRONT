import api from './api';
import { base64ToUint8Array } from './utils';
import { isMobile } from 'react-device-detect';

export const subscribePush = async (matricula) => {
  const notificationPermission = await Notification.requestPermission();
  if (notificationPermission === 'granted') {
    const publicKey = await api.get('/notifications');
    const registration = await navigator?.serviceWorker?.getRegistration();
    const sub = await registration?.pushManager?.getSubscription();
    if (!sub) {
      const newSub = await registration?.pushManager?.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(publicKey.data),
      });
      api.post('/notifications/subscribe', {
        inscricao: newSub,
        matricula,
        dispositivo: getDevice(),
      });
    }
  }
};

export const unsubscribePush = async (matricula) => {
  const sub = await getSubscription();
  if (sub) {
    api.post('/notifications/unsubscribe', {
      endpoint: sub.endpoint,
      matricula,
      dispositivo: getDevice(),
    });
    await sub.unsubscribe();
  }
};

export const getSubscription = async () => {
  const registration = await navigator?.serviceWorker?.getRegistration();
  const sub = await registration?.pushManager?.getSubscription();
  return sub;
};

const getDevice = () => {
  return isMobile ? 'MOBILE' : 'DESKTOP';
};
