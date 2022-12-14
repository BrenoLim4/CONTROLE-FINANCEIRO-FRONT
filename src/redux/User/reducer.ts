import {
  failureGetUserInfoWithToken,
  startGetUserInfoWithToken,
  successGetUserInfoWithToken,
} from './actions';

import { UserReducerState } from './interfaces';
import { handleActions } from 'redux-actions';
import persistReducer from 'redux-persist/lib/persistReducer';
import { startLogout } from '../Session/actions';
import storage from '../storage';

const initialState: UserReducerState = {
  idSessao: '',
  nomeCompleto: '',
  nomeReferencia: '',
  roles: [],
  token: '',
  usuario: '',
  loadingUserInfo: false,
  errorLoadingUserInfo: false,
  hasConnectedToServer: true,
};

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['hasConnectedToServer'],
  // whitelist: ['Session'], //Array de reducers a serem persistidos (usuario e session)
  // transforms: [SessionFilter], //Filtro com campos que não serão persistidos
};

const UserReducer = persistReducer<UserReducerState>(
  persistConfig,
  handleActions(
    {
      [startGetUserInfoWithToken]: (state: UserReducerState) => ({
        ...state,
        loadingUserInfo: true,
      }),
      [successGetUserInfoWithToken]: (
        state: UserReducerState,
        { payload }
      ) => ({
        ...state,
        ...payload,
        loadingUserInfo: false,
        hasConnectedToServer: true,
      }),
      [failureGetUserInfoWithToken]: (state: UserReducerState) => ({
        ...state,
        loadingUserInfo: false,
        errorLoadingUserInfo: true,
        hasConnectedToServer: false,
      }),
      [startLogout]: () => ({
        ...initialState,
      }),
    },
    initialState
  )
);

export default UserReducer;
