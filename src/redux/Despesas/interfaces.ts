import { EmpenhosProps } from './Empenhos/interfaces';
import { LiquidacoesProps } from './Liquidacoes/interfaces';
import { PagamentosProps } from './Pagamentos/interfaces';
import { DespesaProps } from './Despesas/interfaces';

export interface DespesasReducerState {
  empenhos: EmpenhosProps;
  liquidacoes: LiquidacoesProps;
  pagamentos: PagamentosProps;
  despesas: DespesaProps;
}
