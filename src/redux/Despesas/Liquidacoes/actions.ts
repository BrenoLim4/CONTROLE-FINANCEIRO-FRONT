import { createActions } from 'redux-actions';

// Description: Buscar liquidações
export const {
  startGetLiquidacoes,
  successGetLiquidacoes,
  failureGetLiquidacoes,
} = createActions({
  START_GET_LIQUIDACOES: (params) => params,
  SUCCESS_GET_LIQUIDACOES: (data) => data,
  FAILURE_GET_LIQUIDACOES: (error) => error,
});

// Description: Buscar liquidações
export const {
  startGetLiquidacaoDetalhes,
  successGetLiquidacaoDetalhes,
  failureGetLiquidacaoDetalhes,
} = createActions({
  START_GET_LIQUIDACAO_DETALHES: (params) => params,
  SUCCESS_GET_LIQUIDACAO_DETALHES: (data) => data,
  FAILURE_GET_LIQUIDACAO_DETALHES: (error) => error,
});

/**
 * Actions do Datagrid de listagem de Liquidacoes
 */
export const {
  nextLiquidacoesPage,
  previousLiquidacoesPage,
  setLiquidacoesPage,
} = createActions({
  NEXT_LIQUIDACOES_PAGE: () => null,
  PREVIOUS_LIQUIDACOES_PAGE: () => null,
  SET_LIQUIDACOES_PAGE: (page) => page,
});

export const { clearLiquidacoes, clearFilters } = createActions({
  CLEAR_LIQUIDACOES: () => null,
  CLEAR_FILTERS: () => null,
});
