import { createActions } from 'redux-actions';

// export const toggleMenu = createAction('TOGGLE_MENU')

export const { toggleMenu, setPageName, setModule } = createActions({
  TOGGLE_MENU: null, //Não passa nenhum payload
  SET_PAGE_NAME: (pageName) => pageName,
  SET_MODULE: (moduleName) => moduleName,
});

/**
 * Description: Autenticar o token do SSO
 */
export const {
  startTokenAuthentication,
  successTokenAuthentication,
  failureTokenAuthentication,
  changeNetworkStatus,
} = createActions({
  START_TOKEN_AUTHENTICATION: (params) => params,
  SUCCESS_TOKEN_AUTHENTICATION: (data) => data,
  FAILURE_TOKEN_AUTHENTICATION: (error) => error,
  CHANGE_NETWORK_STATUS: (data) => data,
});

/**
 * Description: Logout
 */
export const { startLogout, successLogout, failureLogout } = createActions({
  START_LOGOUT: (params) => params,
  SUCCESS_LOGOUT: (data) => data,
  FAILURE_LOGOUT: (error) => error,
});

/**
 * Description: Refresh Token
 */
export const { startRefreshToken, successRefreshToken, failureRefreshToken } =
  createActions({
    START_REFRESH_TOKEN: (params) => params,
    SUCCESS_REFRESH_TOKEN: (data) => data,
    FAILURE_REFRESH_TOKEN: () => null,
  });

/**
 * Description: Toggle Subscription
 */
export const { toggleSubscription, successToggleSub, failureToggleSub } =
  createActions({
    TOGGLE_SUBSCRIPTION: (sub) => sub,
    SUCCESS_TOGGLE_SUB: () => null,
    FAILURE_TOGGLE_SUB: () => null,
  });
