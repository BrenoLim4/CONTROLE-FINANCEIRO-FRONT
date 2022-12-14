import {
  changeNetworkStatus,
  failureToggleSub,
  failureTokenAuthentication,
  setModule,
  setPageName,
  startLogout,
  startTokenAuthentication,
  successLogout,
  successToggleSub,
  successTokenAuthentication,
  toggleMenu,
  toggleSubscription,
} from './actions';

import { SessionReducerState } from './interfaces';
import { handleActions } from 'redux-actions';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from '../storage';

const initialState: SessionReducerState = {
  isMenuHidden: true,
  pageName: '',
  statusSSO: 'AUTHENTICATING',
  token: '',
  isSubscribed: false,
  networkError: false,
};

const persistConfig = {
  key: 'session',
  storage,
  blacklist: ['isMenuHidden'],
  // whitelist: ['Session'], //Array de reducers a serem persistidos (usuario e session)
  // transforms: [SessionFilter], //Filtro com campos que não serão persistidos
};

const SessionReducer = persistReducer<SessionReducerState>(
  persistConfig,
  handleActions(
    {
      [startTokenAuthentication]: (state: SessionReducerState) => {
        return {
          ...state,
          statusSSO: 'AUTHENTICATING',
        };
      },
      [successTokenAuthentication]: (
        state: SessionReducerState,
        { payload }
      ) => {
        return { ...state, statusSSO: 'OK', token: payload.token };
      },
      [failureTokenAuthentication]: (state: SessionReducerState) => {
        return { ...state, statusSSO: 'NOT_OK', token: '' };
      },
      [changeNetworkStatus]: (state: SessionReducerState, { payload }) => ({
        ...state,
        networkError: payload,
      }),
      [toggleMenu]: (state) => ({
        ...state,
        isMenuHidden: !state.isMenuHidden,
      }),
      [setPageName]: (state, { payload }) => ({ ...state, pageName: payload }),
      [setModule]: (state, { payload }) => ({
        ...state,
        currentModule: payload,
      }),
      [startLogout]: (state) => ({
        ...state,
        token: initialState.token,
      }),
      [successLogout]: () => ({
        ...initialState,
      }),
      [toggleSubscription]: (state) => {
        return {
          ...state,
        };
      },
      [successToggleSub]: (state) => {
        return {
          ...state,
          isSubscribed: !state.isSubscribed,
        };
      },
      [failureToggleSub]: (state) => {
        return {
          ...state,
        };
      },
    },
    initialState
  )
);

export default SessionReducer;
