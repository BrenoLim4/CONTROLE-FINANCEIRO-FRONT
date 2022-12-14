import {
  clearFilters,
  clearLiquidacoes,
  failureGetLiquidacaoDetalhes,
  failureGetLiquidacoes,
  nextLiquidacoesPage,
  previousLiquidacoesPage,
  setLiquidacoesPage,
  startGetLiquidacaoDetalhes,
  startGetLiquidacoes,
  successGetLiquidacaoDetalhes,
  successGetLiquidacoes,
} from './actions';

import { LiquidacoesProps } from './interfaces';
import { handleActions } from 'redux-actions';

const initialState: LiquidacoesProps = {
  liquidacoes: [],
  liquidacao: null,
  loadingLiquidacoes: false,
  errorLiquidacoes: '',
  currentPageLiquidacoes: 0,
  loadingLiquidacao: false,
  errorLiquidacao: '',
  filters: {
    empenho: null,
    exercicio: null,
    numero: null,
    numeroProtocolo: null,
  },
};

export default handleActions(
  {
    /*
     * ===========================================================================
     *                Buscar Lista de Liquidações
     * ===========================================================================
     */
    [startGetLiquidacoes]: (
      state: LiquidacoesProps,
      { payload }
    ): LiquidacoesProps => ({
      ...state,
      loadingLiquidacoes: true,
      errorLiquidacoes: initialState.errorLiquidacoes,
      filters: { ...payload },
    }),

    [successGetLiquidacoes]: (
      state: LiquidacoesProps,
      { payload }
    ): LiquidacoesProps => ({
      ...state,
      liquidacoes: payload,
      loadingLiquidacoes: false,
      currentPageLiquidacoes: 0,
    }),

    [failureGetLiquidacoes]: (
      state: LiquidacoesProps,
      { payload }
    ): LiquidacoesProps => ({
      ...state,
      errorLiquidacoes: payload.toString(),
      loadingLiquidacoes: false,
      liquidacoes: [],
    }),
    /*
     * ===========================================================================
     *                Buscar Liquidação Por Id
     * ===========================================================================
     */
    [startGetLiquidacaoDetalhes]: (
      state: LiquidacoesProps
    ): LiquidacoesProps => ({
      ...state,
      loadingLiquidacao: true,
      errorLiquidacao: initialState.errorLiquidacao,
    }),

    [successGetLiquidacaoDetalhes]: (
      state: LiquidacoesProps,
      { payload }
    ): LiquidacoesProps => ({
      ...state,
      liquidacao: payload,
      loadingLiquidacao: false,
    }),

    [failureGetLiquidacaoDetalhes]: (
      state: LiquidacoesProps,
      { payload }
    ): LiquidacoesProps => ({
      ...state,
      errorLiquidacao: payload.toString(),
      loadingLiquidacao: false,
      liquidacao: null,
    }),
    /*
     * ===========================================================================
     *                Actions que não são feitas no Saga
     * ===========================================================================
     */
    [nextLiquidacoesPage]: (state: LiquidacoesProps) => ({
      ...state,
      currentPageLiquidacoes: state.currentPageLiquidacoes + 1,
    }),
    [previousLiquidacoesPage]: (state: LiquidacoesProps) => ({
      ...state,
      currentPageLiquidacoes: state.currentPageLiquidacoes - 1,
    }),
    [setLiquidacoesPage]: (state: LiquidacoesProps, { payload }) => {
      return { ...state, currentPageLiquidacoes: parseInt(payload) };
    },
    [clearLiquidacoes]: (state: LiquidacoesProps) => ({
      ...state,
      liquidacoes: [],
    }),
    [clearFilters]: (state: LiquidacoesProps, { payload }) => ({
      ...state,
      filters: {
        ...payload,
      },
    }),
  },
  initialState
);
