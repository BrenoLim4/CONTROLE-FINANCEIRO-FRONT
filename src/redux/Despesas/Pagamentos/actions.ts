import { createActions } from 'redux-actions';

// Description: Buscar pagamentos
export const {
  startGetPagamentos,
  successGetPagamentos,
  failureGetPagamentos,
} = createActions({
  START_GET_PAGAMENTOS: (params) => params,
  SUCCESS_GET_PAGAMENTOS: (data) => data,
  FAILURE_GET_PAGAMENTOS: (error) => error,
});

// Description: Buscar pagamentos
export const {
  startGetPagamentoDetalhes,
  successGetPagamentoDetalhes,
  failureGetPagamentoDetalhes,
} = createActions({
  START_GET_PAGAMENTO_DETALHES: (params) => params,
  SUCCESS_GET_PAGAMENTO_DETALHES: (data) => data,
  FAILURE_GET_PAGAMENTO_DETALHES: (error) => error,
});

/**
 * Actions do Datagrid de listagem de Pagamentos
 */
export const { nextPagamentosPage, previousPagamentosPage, setPagamentosPage } =
  createActions({
    NEXT_PAGAMENTOS_PAGE: () => null,
    PREVIOUS_PAGAMENTOS_PAGE: () => null,
    SET_PAGAMENTOS_PAGE: (page) => page,
  });

export const { clearPagamentos, clearFilters } = createActions({
  CLEAR_PAGAMENTOS: () => null,
  CLEAR_FILTERS: () => null,
});
