import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  failureGetUserInfoWithToken,
  startGetUserInfoWithToken,
  successGetUserInfoWithToken,
} from './actions';

import { apiLogin } from '../../api/api';

function* startGetUserInfoWithTokenSaga() {
  yield takeLatest(
    startGetUserInfoWithToken,
    function* ({ payload }: { payload: any }) {
      try {
        const { token } = payload;
        const data = yield apiLogin.post('/usuario', token);
        yield put(successGetUserInfoWithToken(data.data));
      } catch (error) {
        yield put(failureGetUserInfoWithToken(error));
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([call(startGetUserInfoWithTokenSaga)]);
}
