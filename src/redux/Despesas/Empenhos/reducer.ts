import {
  clearEmpenhos,
  clearFilters,
  clearParams,
  failureGetEmpenhoDetalhes,
  failureGetEmpenhos,
  failureGetFontesRecurso,
  failureGetStatus,
  nextEmpenhosPage,
  previousEmpenhosPage,
  setEmpenhosPage,
  setParamsNavegacao,
  startGetEmpenhoDetalhes,
  startGetEmpenhos,
  startGetFontesRecurso,
  startGetStatus,
  successGetEmpenhoDetalhes,
  successGetEmpenhos,
  successGetFontesRecurso,
  successGetStatus,
  startDoReportEmpenhosPdf,
  successDoReportEmpenhosPdf,
  failureDoReportEmpenhosPdf,
  startDoReportEmpenhosExcel,
  successDoReportEmpenhosExcel,
  failureDoReportEmpenhosExcel,
} from './actions';

import { EmpenhosProps } from './interfaces';
import { handleActions } from 'redux-actions';

const initialState: EmpenhosProps = {
  empenhos: [],
  empenho: null,
  fontesRecurso: [],
  loadingEmpenhos: false,
  loadingEmpenho: false,
  errorEmpenhos: '',
  errorEmpenho: '',
  errorFontesRecurso: '',
  currentPageEmpenhos: 0,
  paramsNavegacao: {
    codigoObra: null,
    idMedicao: null,
  },
  status: [],
  errorStatus: '',
  filters: {
    numero: null,
    exercicio: null,
    credor: null,
    numeroProtocolo: null,
    fonteId: null,
    statusDescricao: null,
  },
};

export default handleActions(
  {
    /*
     * ===========================================================================
     *                  Buscar Empenho por filtros especificados
     * ===========================================================================
     */
    [startGetEmpenhos]: (state: EmpenhosProps, { payload }): EmpenhosProps => ({
      ...state,
      loadingEmpenhos: true,
      errorEmpenhos: initialState.errorEmpenhos,
      filters: {
        ...payload,
      },
    }),

    [successGetEmpenhos]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      empenhos: payload,
      loadingEmpenhos: false,
      currentPageEmpenhos: 0,
    }),

    [failureGetEmpenhos]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      errorEmpenhos: payload.toString(),
      empenhos: [],
      loadingEmpenhos: false,
      currentPageEmpenhos: 0,
    }),
    /*
     * ===========================================================================
     *                           Buscar Empenho por id
     * ===========================================================================
     */
    [startGetEmpenhoDetalhes]: (state: EmpenhosProps): EmpenhosProps => ({
      ...state,
      loadingEmpenho: true,
      errorEmpenho: initialState.errorEmpenho,
    }),

    [successGetEmpenhoDetalhes]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      empenho: payload,
      loadingEmpenho: false,
    }),

    [failureGetEmpenhoDetalhes]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      errorEmpenho: payload.toString(),
      loadingEmpenho: false,
      empenho: null,
    }),

    /*
     * ===========================================================================
     *                  Buscar Listagem de fonte de Recurso
     * ===========================================================================
     */
    [startGetFontesRecurso]: (state: EmpenhosProps): EmpenhosProps => ({
      ...state,
    }),

    [successGetFontesRecurso]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      fontesRecurso: payload,
    }),

    [failureGetFontesRecurso]: (
      state: EmpenhosProps,
      { payload }
    ): EmpenhosProps => ({
      ...state,
      fontesRecurso: [],
      errorFontesRecurso: payload.toString(),
    }),

    /*
     * ===========================================================================
     *                  Buscar Listagem de Status
     * ===========================================================================
     */
    [startGetStatus]: (state: EmpenhosProps): EmpenhosProps => ({
      ...state,
    }),

    [successGetStatus]: (state: EmpenhosProps, { payload }): EmpenhosProps => ({
      ...state,
      status: payload,
    }),

    [failureGetStatus]: (state: EmpenhosProps, { payload }): EmpenhosProps => ({
      ...state,
      status: [],
      errorStatus: payload.toString(),
    }),

    /*
     * ===========================================================================
     *                Actions que não são feitas no Saga
     * ===========================================================================
     */
    [nextEmpenhosPage]: (state: EmpenhosProps) => ({
      ...state,
      currentPageEmpenhos: state.currentPageEmpenhos + 1,
    }),
    [previousEmpenhosPage]: (state: EmpenhosProps) => ({
      ...state,
      currentPageEmpenhos: state.currentPageEmpenhos - 1,
    }),
    [setEmpenhosPage]: (state: EmpenhosProps, { payload }) => {
      return { ...state, currentPageEmpenhos: parseInt(payload) };
    },
    [clearEmpenhos]: (state: EmpenhosProps) => ({
      ...state,
      empenhos: [],
    }),
    [clearFilters]: (state: EmpenhosProps, { payload }) => ({
      ...state,
      filters: {
        ...payload,
      },
    }),
    [setParamsNavegacao]: (state: EmpenhosProps, { payload }) => ({
      ...state,
      paramsNavegacao: {
        codigoObra: payload.codigoObra,
        idMedicao: payload.idMedicao,
      },
    }),
    [clearParams]: (state: EmpenhosProps) => ({
      ...state,
      paramsNavegacao: {
        idMedicao: null,
        codigoObra: null,
      },
    }),
    [startDoReportEmpenhosPdf]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: true,
      errorEmpenhos: '',
    }),
    [successDoReportEmpenhosPdf]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: false,
    }),
    [failureDoReportEmpenhosPdf]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: false,
    }),

    [startDoReportEmpenhosExcel]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: true,
      errorMsgEmpenhos: '',
    }),
    [successDoReportEmpenhosExcel]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: false,
    }),
    [failureDoReportEmpenhosExcel]: (state: EmpenhosProps) => ({
      ...state,
      loadingEmpenhos: false,
    }),
  },
  initialState
);
