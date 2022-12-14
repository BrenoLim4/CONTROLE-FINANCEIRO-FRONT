import { createActions } from 'redux-actions';

/**
 * Description: Pegar dados do usuario com token
 */
export const {
  startGetUserInfoWithToken,
  successGetUserInfoWithToken,
  failureGetUserInfoWithToken,
} = createActions({
  START_GET_USER_INFO_WITH_TOKEN: (params) => params,
  SUCCESS_GET_USER_INFO_WITH_TOKEN: (data) => data,
  FAILURE_GET_USER_INFO_WITH_TOKEN: (error) => error,
});
