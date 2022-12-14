import { createActions } from 'redux-actions';
import {
  DespesaDetalhes,
  DespesaResumo,
  Filters,
  ForFilterPicker,
} from './interfaces';

// Description: Buscar lista de Despesa
export const { startGetDespesas, successGetDespesas, failureGetDespesas } =
  createActions({
    START_GET_DESPESAS: (params: Filters) => params,
    SUCCESS_GET_DESPESAS: (data: DespesaResumo) => data,
    FAILURE_GET_DESPESAS: () => null,
  });

// Description: Buscar detalhes da despesa
export const {
  startGetDespesaDetalhes,
  successGetDespesaDetalhes,
  failureGetDespesaDetalhes,
} = createActions({
  START_GET_DESPESA_DETALHES: (params) => {
    return { nrProtocolo: params };
  },
  SUCCESS_GET_DESPESA_DETALHES: (data: DespesaDetalhes) => data,
  FAILURE_GET_DESPESA_DETALHES: () => null,
});

// buscar os tipos de despesa
export const {
  startGetTiposDespesa,
  successGetTiposDespesa,
  failureGetTiposDespesa,
} = createActions({
  START_GET_TIPOS_DESPESA: () => null,
  SUCCESS_GET_TIPOS_DESPESA: (data: ForFilterPicker) => data,
  FAILURE_GET_TIPOS_DESPESA: () => null,
});

//buscar lista de catecoria da despesa
export const {
  startGetCategoriasDespesa,
  successGetCategoriasDespesa,
  failureGetCategoriasDespesa,
} = createActions({
  START_GET_CATEGORIAS_DESPESA: () => null,
  SUCCESS_GET_CATEGORIAS_DESPESA: (data: ForFilterPicker) => data,
  FAILURE_GET_CATEGORIAS_DESPESA: () => null,
});

//buscar lista de status da despesa
export const {
  startGetStatusDespesa,
  successGetStatusDespesa,
  failureGetStatusDespesa,
} = createActions({
  START_GET_STATUS_DESPESA: () => null,
  SUCCESS_GET_STATUS_DESPESA: (data: ForFilterPicker) => data,
  FAILURE_GET_STATUS_DESPESA: () => null,
});

export const { startGetListSetores, successGetListSetores } = createActions({
  START_GET_LIST_SETORES: () => null,
  SUCCESS_GET_LIST_SETORES: (data: string[]) => data,
});

export const {
  startDoReportDespesasPdf,
  successDoReportDespesasPdf,
  failureDoReportDespesasPdf,
} = createActions({
  START_DO_REPORT_DESPESAS_PDF: (filters, visible) => {
    return { filtros: filters, despesaCampoExibivelDTO: visible };
  },
  SUCCESS_DO_REPORT_DESPESAS_PDF: (data) => {
    return data;
  },
  FAILURE_DO_REPORT_DESPESAS_PDF: (error) => error,
});

export const {
  startDoReportDespesasExcel,
  successDoReportDespesasExcel,
  failureDoReportDespesasExcel,
} = createActions({
  START_DO_REPORT_DESPESAS_EXCEL: (filters: Filters, visible) => {
    return { filtros: filters, despesaCampoExibivelDTO: visible };
  },
  SUCCESS_DO_REPORT_DESPESAS_EXCEL: (data) => {
    return data;
  },
  FAILURE_DO_REPORT_DESPESAS_EXCEL: (error) => error,
});

/**
 * Actions do Datagrid de listagem de Despesa
 */
export const { nextDespesasPage, previousDespesasPage, setDespesasPage } =
  createActions({
    NEXT_DESPESAS_PAGE: () => null,
    PREVIOUS_DESPESAS_PAGE: () => null,
    SET_DESPESAS_PAGE: (page) => page,
  });

export const { clearDespesas, clearFilters } = createActions({
  CLEAR_DESPESAS: () => null,
  CLEAR_FILTERS: () => null,
});
