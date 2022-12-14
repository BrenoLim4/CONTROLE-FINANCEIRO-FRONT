import {
  clearFilters,
  clearPagamentos,
  failureGetPagamentoDetalhes,
  failureGetPagamentos,
  nextPagamentosPage,
  previousPagamentosPage,
  setPagamentosPage,
  startGetPagamentoDetalhes,
  startGetPagamentos,
  successGetPagamentoDetalhes,
  successGetPagamentos,
} from './actions';

import { PagamentosProps } from './interfaces';
import { handleActions } from 'redux-actions';

const initialState: PagamentosProps = {
  pagamentos: [],
  pagamento: null,
  loadingPagamentos: false,
  errorPagamentos: '',
  currentPagePagamentos: 0,
  loadingPagamento: false,
  errorPagamento: '',
  filters: {
    credor: null,
    empenho: null,
    exercicio: null,
    numero: null,
    numeroProtocolo: null,
  },
};

export default handleActions(
  {
    /* ===========================================================================
     *                Buscar Lista de Pagamentos por id Empenho
     * ===========================================================================
     */
    [startGetPagamentos]: (
      state: PagamentosProps,
      { payload }
    ): PagamentosProps => ({
      ...state,
      loadingPagamentos: true,
      errorPagamentos: initialState.errorPagamentos,
      filters: {
        ...payload,
      },
    }),

    [successGetPagamentos]: (
      state: PagamentosProps,
      { payload }
    ): PagamentosProps => {
      return {
        ...state,
        loadingPagamentos: false,
        currentPagePagamentos: 0,
        pagamentos: payload,
      };
    },

    [failureGetPagamentos]: (
      state: PagamentosProps,
      { payload }
    ): PagamentosProps => ({
      ...state,
      errorPagamentos: payload.toString(),
      loadingPagamentos: false,
      pagamentos: [],
    }),
    /*
     * ===========================================================================
     *                Buscar Pagamento detalhado, Por Id
     * ===========================================================================
     */
    [startGetPagamentoDetalhes]: (state: PagamentosProps): PagamentosProps => ({
      ...state,
      loadingPagamento: true,
      errorPagamento: initialState.errorPagamento,
    }),

    [successGetPagamentoDetalhes]: (
      state: PagamentosProps,
      { payload }
    ): PagamentosProps => ({
      ...state,
      pagamento: payload,
      loadingPagamento: false,
    }),

    [failureGetPagamentoDetalhes]: (
      state: PagamentosProps,
      { payload }
    ): PagamentosProps => ({
      ...state,
      errorPagamento: payload.toString(),
      loadingPagamento: false,
      pagamento: null,
    }),
    /*
     * ===========================================================================
     *                Actions que não são feitas no Saga
     * ===========================================================================
     */
    [nextPagamentosPage]: (state: PagamentosProps) => ({
      ...state,
      currentPagePagamentos: state.currentPagePagamentos + 1,
    }),
    [previousPagamentosPage]: (state: PagamentosProps) => ({
      ...state,
      currentPagePagamentos: state.currentPagePagamentos - 1,
    }),
    [setPagamentosPage]: (state: PagamentosProps, { payload }) => {
      return { ...state, currentPagePagamentos: parseInt(payload) };
    },
    [clearPagamentos]: (state: PagamentosProps) => ({
      ...state,
      pagamentos: [],
    }),
    [clearFilters]: (state: PagamentosProps, { payload }) => {
      return {
        ...state,
        filters: {
          ...payload,
        },
      };
    },
  },
  initialState
);
