import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  startGetLiquidacoes,
  successGetLiquidacoes,
  failureGetLiquidacoes,
  startGetLiquidacaoDetalhes,
  successGetLiquidacaoDetalhes,
  failureGetLiquidacaoDetalhes,
} from './actions';

import api from 'api/api';
import { newToast } from 'api/utils';

//Buscar Lista de Liquidações
function* startGetLiquidacoesSaga() {
  yield takeLatest(
    startGetLiquidacoes,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.get(`/liquidacoes`, {
          params: { ...payload },
        });
        yield put(successGetLiquidacoes(data));
      } catch (error) {
        newToast('Não foi possível carregar as liquidações', 'ERROR');
        yield put(failureGetLiquidacoes(error));
      }
    }
  );
}

function* startGetLiquidacaoDetalhesSaga() {
  yield takeLatest(
    startGetLiquidacaoDetalhes,
    function* ({ payload }: { payload: string }) {
      try {
        const { data } = yield api.get(`/liquidacoes/detalhes/${payload}`);
        yield put(successGetLiquidacaoDetalhes(data));
      } catch (error) {
        newToast('Error ao carregar detalhes da Liquidação!', 'ERROR');
        yield put(failureGetLiquidacaoDetalhes(error));
      }
    }
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    call(startGetLiquidacoesSaga),
    call(startGetLiquidacaoDetalhesSaga),
  ]);
}
