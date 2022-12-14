import { Pagamento } from '../Pagamentos/interfaces';

export interface LiquidacoesProps {
  liquidacoes: Liquidacao[];
  liquidacao: LiquidacaoDetalhes;

  loadingLiquidacoes: boolean;
  errorLiquidacoes: string;

  loadingLiquidacao: boolean;
  errorLiquidacao: string;

  currentPageLiquidacoes: number;
  filters: Filters;
}

export interface Liquidacao {
  id: string;
  numeroProtocolo: string;
  numero: string;
  exercicio: string;
  natureza: string;
  efeito: string;
  dataEmissao: string;
  valor: number;
  valorRetido: number;
  empenho: string;
}

export interface LiquidacaoDetalhes extends Liquidacao {
  cpfOrdenadorDespesa: string;
  exercicioRestosApagar: number;
  isnSeq: number;
  tipoDocDespesa: string;
  pagamentos: Pagamento[];
}

export interface Filters {
  numero: string;
  exercicio: string;
  numeroProtocolo: string;
  empenho: string;
}
