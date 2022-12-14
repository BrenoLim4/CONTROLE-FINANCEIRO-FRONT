export interface SessionReducerState {
  isMenuHidden: boolean;
  pageName: string;
  statusSSO: 'AUTHENTICATING' | 'OK' | 'NOT_OK';
  token: string;
  isSubscribed: boolean;
  networkError: boolean;
}
