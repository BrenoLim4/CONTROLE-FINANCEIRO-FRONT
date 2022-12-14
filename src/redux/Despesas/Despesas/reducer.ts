import {
  startGetDespesas,
  successGetDespesas,
  failureGetDespesas,
  startGetDespesaDetalhes,
  successGetDespesaDetalhes,
  failureGetDespesaDetalhes,
  startGetStatusDespesa,
  successGetStatusDespesa,
  failureGetStatusDespesa,
  startGetCategoriasDespesa,
  successGetCategoriasDespesa,
  failureGetCategoriasDespesa,
  startGetTiposDespesa,
  successGetTiposDespesa,
  failureGetTiposDespesa,
  nextDespesasPage,
  previousDespesasPage,
  setDespesasPage,
  clearFilters,
  clearDespesas,
  startDoReportDespesasPdf,
  successDoReportDespesasPdf,
  failureDoReportDespesasPdf,
  startDoReportDespesasExcel,
  successDoReportDespesasExcel,
  failureDoReportDespesasExcel,
  startGetListSetores,
  successGetListSetores,
} from './actions';

import { DespesaProps } from './interfaces';
import { handleActions } from 'redux-actions';

const initialState: DespesaProps = {
  despesas: [],
  despesa: null,
  loadingDespesas: false,
  loadingDespesa: false,
  currentPageDespesas: 0,
  statusList: null,
  tiposList: null,
  categoriasList: null,
  filters: null,
  errorGetDespesas: '',
  setoresList: [],
};

export default handleActions(
  {
    /*
     * ===========================================================================
     *                  Buscar Despesa por filtros especificados
     * ===========================================================================
     */
    [startGetDespesas]: (state: DespesaProps, { payload }): DespesaProps => ({
      ...state,
      loadingDespesas: true,
      errorGetDespesas: initialState.errorGetDespesas,
      filters: {
        ...payload,
      },
    }),

    [successGetDespesas]: (state: DespesaProps, { payload }): DespesaProps => ({
      ...state,
      despesas: payload,
      loadingDespesas: false,
      currentPageDespesas: 0,
    }),

    [failureGetDespesas]: (state: DespesaProps, { payload }): DespesaProps => ({
      ...state,
      errorGetDespesas: payload.toString(),
      despesas: [],
      loadingDespesas: false,
      currentPageDespesas: 0,
    }),

    /*
     * ===========================================================================
     *                           Buscar Despesa por número de protocolo
     * ===========================================================================
     */
    [startGetDespesaDetalhes]: (state: DespesaProps): DespesaProps => ({
      ...state,
      loadingDespesa: true,
      errorGetDespesas: initialState.errorGetDespesas,
    }),

    [successGetDespesaDetalhes]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      despesa: payload,
      loadingDespesa: false,
    }),

    [failureGetDespesaDetalhes]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      loadingDespesa: false,
      despesa: null,
    }),
    /*
     * ===========================================================================
     *                  Buscar Listagem de Status
     * ===========================================================================
     */
    [startGetStatusDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
    }),

    [successGetStatusDespesa]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      statusList: payload,
    }),

    [failureGetStatusDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
      statusList: [],
    }),

    /*
     * ===========================================================================
     *                  Buscar Listagem de Categorias
     * ===========================================================================
     */
    [startGetCategoriasDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
    }),

    [successGetCategoriasDespesa]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      categoriasList: payload,
    }),

    [failureGetCategoriasDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
      categoriasList: [],
    }),

    /*
     * ===========================================================================
     *                  Buscar Listagem de Tipo Despesa
     * ===========================================================================
     */

    [startGetTiposDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
    }),

    [successGetTiposDespesa]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      tiposList: payload,
    }),

    [failureGetTiposDespesa]: (state: DespesaProps): DespesaProps => ({
      ...state,
      tiposList: [],
    }),

    [startGetListSetores]: (state: DespesaProps): DespesaProps => ({
      setoresList: [],
      ...state,
      loadingDespesas: true,
    }),

    [successGetListSetores]: (
      state: DespesaProps,
      { payload }
    ): DespesaProps => ({
      ...state,
      setoresList: payload,
      loadingDespesas: false,
    }),

    [startDoReportDespesasPdf]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: true,
      errorDespesas: '',
    }),
    [successDoReportDespesasPdf]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: false,
    }),
    [failureDoReportDespesasPdf]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: false,
    }),

    [startDoReportDespesasExcel]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: true,
      errorMsgDespesas: '',
    }),
    [successDoReportDespesasExcel]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: false,
    }),
    [failureDoReportDespesasExcel]: (state: DespesaProps) => ({
      ...state,
      loadingDespesas: false,
    }),

    /*
     * ===========================================================================
     *                Actions que não são feitas no Saga
     * ===========================================================================
     */

    [nextDespesasPage]: (state: DespesaProps) => ({
      ...state,
      currentPageDespesas: state.currentPageDespesas + 1,
    }),
    [previousDespesasPage]: (state: DespesaProps) => ({
      ...state,
      currentPageDespesas: state.currentPageDespesas - 1,
    }),
    [setDespesasPage]: (state: DespesaProps, { payload }) => {
      return { ...state, currentPageDespesas: parseInt(payload) };
    },
    [clearDespesas]: (state: DespesaProps) => ({
      ...state,
      despesas: [],
    }),
    [clearFilters]: (state: DespesaProps, { payload }) => {
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
