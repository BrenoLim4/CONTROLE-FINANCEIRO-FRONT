import { createActions } from 'redux-actions';
import { Filters } from './interfaces';

// Description: Buscar Lista de Empenhos
export const { startGetEmpenhos, successGetEmpenhos, failureGetEmpenhos } =
  createActions({
    START_GET_EMPENHOS: (params) => params,
    SUCCESS_GET_EMPENHOS: (data) => data,
    FAILURE_GET_EMPENHOS: (error) => error,
  });

// Description: Buscar detalhes do Empenho
export const {
  startGetEmpenhoDetalhes,
  successGetEmpenhoDetalhes,
  failureGetEmpenhoDetalhes,
} = createActions({
  START_GET_EMPENHO_DETALHES: (params) => params,
  SUCCESS_GET_EMPENHO_DETALHES: (data) => data,
  FAILURE_GET_EMPENHO_DETALHES: (error) => error,
});

// Description: Buscar lista de fontes de recurso
export const {
  startGetFontesRecurso,
  successGetFontesRecurso,
  failureGetFontesRecurso,
} = createActions({
  START_GET_FONTES_RECURSO: () => null,
  SUCCESS_GET_FONTES_RECURSO: (data) => data,
  FAILURE_GET_FONTES_RECURSO: (error) => error,
});

// Description: Buscar lista de Status
export const { startGetStatus, successGetStatus, failureGetStatus } =
  createActions({
    START_GET_STATUS: () => null,
    SUCCESS_GET_STATUS: (data) => data,
    FAILURE_GET_STATUS: (error) => error,
  });

export const { clearEmpenhos, clearFilters } = createActions({
  CLEAR_EMPENHOS: () => null,
  CLEAR_FILTERS: () => null,
});

/**
 * Actions do Datagrid de listagem de Empenhos
 */
export const { nextEmpenhosPage, previousEmpenhosPage, setEmpenhosPage } =
  createActions({
    NEXT_EMPENHOS_PAGE: () => null,
    PREVIOUS_EMPENHOS_PAGE: () => null,
    SET_EMPENHOS_PAGE: (page) => page,
  });

export const { setParamsNavegacao, clearParams } = createActions({
  SET_PARAMS_NAVEGACAO: (payload) => payload,
  CLEAR_PARAMS: () => null,
});

export const {
  startDoReportEmpenhosPdf,
  successDoReportEmpenhosPdf,
  failureDoReportEmpenhosPdf,
} = createActions({
  START_DO_REPORT_EMPENHOS_PDF: (filters, visible) => {
    return { filtros: filters, empenhoCampoExibivelDTO: visible };
  },
  SUCCESS_DO_REPORT_EMPENHOS_PDF: (data) => {
    return data;
  },
  FAILURE_DO_REPORT_EMPENHOS_PDF: (error) => error,
});

export const {
  startDoReportEmpenhosExcel,
  successDoReportEmpenhosExcel,
  failureDoReportEmpenhosExcel,
} = createActions({
  START_DO_REPORT_EMPENHOS_EXCEL: (filters: Filters, visible) => {
    return { filtros: filters, empenhoCampoExibivelDTO: visible };
  },
  SUCCESS_DO_REPORT_EMPENHOS_EXCEL: (data) => {
    return data;
  },
  FAILURE_DO_REPORT_EMPENHOS_EXCEL: (error) => error,
});
