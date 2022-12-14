import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import api from 'api/api';
import { newToast } from 'api/utils';
import fileDownload from 'js-file-download';

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
  startDoReportDespesasPdf,
  successDoReportDespesasPdf,
  failureDoReportDespesasPdf,
  startDoReportDespesasExcel,
  successDoReportDespesasExcel,
  failureDoReportDespesasExcel,
  successGetListSetores,
  startGetListSetores,
} from './actions';
import { Filters } from './interfaces';

const URL_BASE_DESPESA = '/despesa';

//Buscar Lista de Despesas
function* startGetDespesasSaga() {
  yield takeLatest(startGetDespesas, function* ({ payload }: { payload: any }) {
    try {
      const { data } = yield api.get(URL_BASE_DESPESA, {
        params: {
          size: payload.size,
          page: payload.page,
          filtersJson: payload.filtersJson,
          sortColumnsJson: Object.assign({}, payload.sortColumns),
          // ...payload,
        },
      });
      console.log(data);
      yield put(successGetDespesas(data.results));
    } catch (error) {
      newToast('Não foi possível carregar às Despesas', 'ERROR');
      console.log(error);
      yield put(failureGetDespesas(error));
    }
  });
}

function* startGetDespesaDetalhesSaga() {
  yield takeLatest(
    startGetDespesaDetalhes,
    function* ({ payload }: { payload: string }) {
      try {
        const { data } = yield api.get(`${URL_BASE_DESPESA}/detalhes/`, {
          params: payload,
        });
        yield put(successGetDespesaDetalhes(data));
      } catch (error) {
        newToast('Error ao carregar detalhes da Despesa!', 'ERROR');
        yield put(failureGetDespesaDetalhes(error));
      }
    }
  );
}

function* startGetStatusDespesaSaga() {
  yield takeLatest(startGetStatusDespesa, function* () {
    try {
      const { data } = yield api.get(`${URL_BASE_DESPESA}/allStatus`);
      yield put(successGetStatusDespesa(data));
    } catch (error) {
      newToast('Error ao carregar lista de Status da Despesa.', 'ERROR');
      yield put(failureGetStatusDespesa(error));
    }
  });
}

function* startGetCategoriasDespesaSaga() {
  yield takeLatest(startGetCategoriasDespesa, function* () {
    try {
      const { data } = yield api.get(`${URL_BASE_DESPESA}/allCategorias`);
      yield put(successGetCategoriasDespesa(data));
    } catch (error) {
      newToast('Error ao carregar lista de Categorias da Despesa.', 'ERROR');
      yield put(failureGetCategoriasDespesa(error));
    }
  });
}

function* startGetTiposDespesaSaga() {
  yield takeLatest(startGetTiposDespesa, function* () {
    try {
      const { data } = yield api.get(`${URL_BASE_DESPESA}/allTipos`);
      yield put(successGetTiposDespesa(data));
    } catch (error) {
      newToast('Error ao carregar lista de Tipos da Despesa.', 'ERROR');
      yield put(failureGetTiposDespesa(error));
    }
  });
}

function* startGetSetoresSaga() {
  yield takeLatest(startGetListSetores, function* () {
    try {
      const { data } = yield api.get(`/despesa/allSetoresAtivos`);
      yield put(successGetListSetores(data === '' ? [] : data));
    } catch (error) {
      newToast('Error ao buscar Setores', 'ERROR');
    }
  });
}

function* startDoReportDespesasPdfSaga() {
  yield takeLatest(
    startDoReportDespesasPdf,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.post(
          `${URL_BASE_DESPESA}/report-despesa-pdf`,
          {
            ...payload,
          },
          { responseType: 'blob' }
        );
        fileDownload(data, 'relatorio-lista-despesas.pdf');
        yield put(successDoReportDespesasPdf());
      } catch (error) {
        yield put(failureDoReportDespesasPdf(error));
        newToast('Erro ao emitir relatório', 'ERROR');
      }
    }
  );
}

function* startDoReportDespesasExcelSaga() {
  yield takeLatest(
    startDoReportDespesasExcel,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.post(
          `${URL_BASE_DESPESA}/report-despesa-xls`,
          { ...payload },
          {
            responseType: 'blob',
          }
        );

        fileDownload(data, 'relatorio-lista-despesas.xls');

        yield put(successDoReportDespesasExcel());
      } catch (error) {
        yield put(failureDoReportDespesasExcel(error));
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    call(startGetDespesasSaga),
    call(startGetDespesaDetalhesSaga),
    call(startGetStatusDespesaSaga),
    call(startGetCategoriasDespesaSaga),
    call(startGetTiposDespesaSaga),
    call(startDoReportDespesasPdfSaga),
    call(startDoReportDespesasExcelSaga),
    call(startGetSetoresSaga),
  ]);
}
