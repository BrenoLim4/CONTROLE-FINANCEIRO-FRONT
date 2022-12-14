export interface UserReducerState {
  idSessao: string | null;
  nomeCompleto: string;
  nomeReferencia: string;
  roles: Array<string>;
  token: string | null;
  usuario: string;
  loadingUserInfo: boolean;
  errorLoadingUserInfo: boolean;
  hasConnectedToServer: boolean;
}
