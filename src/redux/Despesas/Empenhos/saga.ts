import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  startGetEmpenhos,
  successGetEmpenhos,
  failureGetEmpenhos,
  startGetEmpenhoDetalhes,
  successGetEmpenhoDetalhes,
  failureGetEmpenhoDetalhes,
  startGetFontesRecurso,
  successGetFontesRecurso,
  failureGetFontesRecurso,
  startGetStatus,
  successGetStatus,
  failureGetStatus,
  startDoReportEmpenhosPdf,
  successDoReportEmpenhosPdf,
  failureDoReportEmpenhosPdf,
  startDoReportEmpenhosExcel,
  successDoReportEmpenhosExcel,
  failureDoReportEmpenhosExcel,
} from './actions';

import api from 'api/api';
import { Filters } from './interfaces';
import { newToast } from 'api/utils';
import fileDownload from 'js-file-download';

function* startGetEmpenhosSaga() {
  yield takeLatest(
    startGetEmpenhos,
    function* ({ payload }: { payload: Filters }) {
      try {
        const { data } = yield api.get('/empenhos', { params: { ...payload } });
        yield put(successGetEmpenhos(data === '' ? [] : data));
      } catch (error) {
        newToast('Error ao carregar Empenhos', 'ERROR');
        yield put(failureGetEmpenhos(error.toString()));
      }
    }
  );
}

//detalhes Empenho
function* startGetEmpenhoDetalhesSaga() {
  yield takeLatest(
    startGetEmpenhoDetalhes,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.get(`/empenhos/detalhes/${payload}`);
        yield put(successGetEmpenhoDetalhes(data));
      } catch (error) {
        newToast('Error ao carregar detalhes do empenho', 'ERROR');
        yield put(failureGetEmpenhoDetalhes(error.toString()));
      }
    }
  );
}

function* startGetFontesRecursoSaga() {
  yield takeLatest(startGetFontesRecurso, function* () {
    try {
      const { data } = yield api.get('/empenhos/fontes');
      yield put(successGetFontesRecurso(data === '' ? [] : data));
    } catch (error) {
      newToast('Error ao carregar Fontes de Recurso', 'ERROR');
      yield put(failureGetFontesRecurso(error.toString()));
    }
  });
}

function* startGetStatusSaga() {
  yield takeLatest(startGetStatus, function* () {
    try {
      const { data } = yield api.get('/empenhos/status');
      yield put(successGetStatus(data === '' ? [] : data));
    } catch (error) {
      newToast('Error ao carregar Status', 'ERROR');
      yield put(failureGetStatus(error.toString()));
    }
  });
}
function* startDoReportEmpenhosPdfSaga() {
  yield takeLatest(
    startDoReportEmpenhosPdf,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.post(
          `/empenhos/report-empenho-pdf`,
          {
            ...payload,
          },
          { responseType: 'blob' }
        );
        fileDownload(data, 'relatorio-lista-empenhos.pdf');
        yield put(successDoReportEmpenhosPdf());
      } catch (error) {
        yield put(failureDoReportEmpenhosPdf(error));
        newToast('Erro ao emitir relatório em PDF', 'ERROR');
      }
    }
  );
}

function* startDoReportEmpenhosExcelSaga() {
  yield takeLatest(
    startDoReportEmpenhosExcel,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.post(
          `/empenhos/report-empenho-xls`,
          { ...payload },
          {
            responseType: 'blob',
          }
        );

        fileDownload(data, 'relatorio-lista-empenhos.xls');

        yield put(successDoReportEmpenhosExcel());
      } catch (error) {
        yield put(failureDoReportEmpenhosExcel(error));
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    call(startGetEmpenhosSaga),
    call(startGetEmpenhoDetalhesSaga),
    call(startGetFontesRecursoSaga),
    call(startGetStatusSaga),
    call(startDoReportEmpenhosExcelSaga),
    call(startDoReportEmpenhosPdfSaga),
  ]);
}
