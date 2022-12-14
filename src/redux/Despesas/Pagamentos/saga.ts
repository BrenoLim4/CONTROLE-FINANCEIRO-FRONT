import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  startGetPagamentos,
  successGetPagamentos,
  failureGetPagamentos,
  startGetPagamentoDetalhes,
  successGetPagamentoDetalhes,
  failureGetPagamentoDetalhes,
} from './actions';

import api from 'api/api';
import { newToast } from 'api/utils';

//Buscar Lista de pagamentos
function* startGetPagamentosSaga() {
  yield takeLatest(
    startGetPagamentos,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.get(`/pagamentos`, {
          params: { ...payload },
        });
        yield put(successGetPagamentos(data));
      } catch (error) {
        newToast('Não foi possível carregar os pagamentos', 'ERROR');
        yield put(failureGetPagamentos(error));
      }
    }
  );
}

//buscar Pagamento detalhado, por id
function* startGetPagamentoDetalhesSaga() {
  yield takeLatest(
    startGetPagamentoDetalhes,
    function* ({ payload }: { payload: string }) {
      try {
        const { data } = yield api.get(`/pagamentos/detalhes/${payload}`);
        yield put(successGetPagamentoDetalhes(data));
      } catch (error) {
        newToast('Error ao carregar detalhes do pagamento', 'ERROR');
        yield put(failureGetPagamentoDetalhes(error));
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    call(startGetPagamentosSaga),
    call(startGetPagamentoDetalhesSaga),
  ]);
}
