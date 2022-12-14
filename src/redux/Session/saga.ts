import { all, call, put, takeLatest } from 'redux-saga/effects';
import api, { apiLogin } from '../../api/api';
import {
  changeNetworkStatus,
  failureLogout,
  failureRefreshToken,
  failureToggleSub,
  startLogout,
  startRefreshToken,
  startTokenAuthentication,
  successLogout,
  successRefreshToken,
  successToggleSub,
  successTokenAuthentication,
  toggleSubscription,
} from './actions';
import { logout, newToast, refreshToken } from '../../api/utils';
import { subscribePush, unsubscribePush } from '../../api/push';

import { startGetUserInfoWithToken } from '../User/actions';

function* startTokenAuthenticationSaga() {
  yield takeLatest(
    startTokenAuthentication,
    function* ({ payload }: { payload: any }) {
      try {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${payload.token}`;
        apiLogin.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${payload.token}`;

        const data = yield apiLogin.post('/autenticarToken', payload.token);
        yield put(changeNetworkStatus(false));
        yield put(successTokenAuthentication({ data, token: payload.token }));
        yield put(startGetUserInfoWithToken({ token: payload.token }));
        if (payload?.callback) {
          payload.callback('/');
        }
      } catch (error) {
        if (error?.message === 'Network Error') {
          newToast('A rede conectada não tem acesso à internet', 'WARNING');
          yield put(changeNetworkStatus(true));
        } else {
          yield put(startRefreshToken(payload.token));
        }
      }
    }
  );
}

function* startLogoutSaga() {
  yield takeLatest(startLogout, function* () {
    try {
      yield put(successLogout());
      logout();
    } catch (error) {
      yield put(failureLogout(error));
      logout();
    }
  });
}

function* startRefreshTokenSaga() {
  yield takeLatest(startRefreshToken, function* () {
    try {
      yield put(successRefreshToken());
      refreshToken();
    } catch (error) {
      yield put(failureRefreshToken(error));
      yield put(startLogout());
    }
  });
}

function* getToggleSubscription() {
  yield takeLatest(
    toggleSubscription,
    function* ({ payload }: { payload: any }) {
      try {
        yield payload.isSubscribed
          ? unsubscribePush(payload.matricula)
          : subscribePush(payload.matricula);
        newToast(
          `Notificações ${payload.isSubscribed ? 'desativadas.' : 'ativadas.'}`,
          payload.isSubscribed ? 'WARNING' : 'SUCCESS'
        );
        yield put(successToggleSub());
      } catch (error) {
        const errorMessage = yield error?.text();
        newToast(errorMessage, 'ERROR');
        yield put(failureToggleSub());
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    call(startTokenAuthenticationSaga),
    call(startLogoutSaga),
    call(startRefreshTokenSaga),
    call(getToggleSubscription),
  ]);
}
