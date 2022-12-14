import { all, call } from '@redux-saga/core/effects';

import EmpenhosSaga from './Empenhos/saga';
import LiquidacoesSaga from './Liquidacoes/saga';
import PagamentosSaga from './Pagamentos/saga';
import DespesaSaga from './Despesas/saga';

// eslint-disable-next-line import/no-anonymous-default-export
export default function* DespesaSectionSaga() {
  yield all([
    call(EmpenhosSaga),
    call(LiquidacoesSaga),
    call(PagamentosSaga),
    call(DespesaSaga),
  ]);
}
