export interface PagamentosProps {
  pagamentos: Pagamento[];
  pagamento: PagamentoDetalhes;

  loadingPagamentos: boolean;
  errorPagamentos: string;
  loadingPagamento: boolean;
  errorPagamento: string;
  currentPagePagamentos: number;
  filters: Filters;
}

export interface Pagamento {
  id: string;
  empenho: string;
  liquidacao: string;
  numeroProtocolo: string;
  numero: string;
  exercicio: number;
  natureza: string;
  efeito: string;
  valor: number;
  dataEmissao: string;
  cpfCnpjCredor: string;
  nomeCredor: string;
  status: string;
}

export interface PagamentoDetalhes extends Pagamento {
  agenciaBeneficiario: string;
  agenciaOrigem: string;
  bancoBeneficiario: string;
  bancoOrigem: string;
  bancoPagto: string;
  contaBeneficiario: string;
  contaOrigem: string;
  dataRetornoRemessaBancaria: string;
  documentoCredor: string;
  justificativa: string;
  servicoBancario: string;
}

export interface Filters {
  numero: string;
  exercicio: string;
  numeroProtocolo: string;
  empenho: string;
  credor: string;
}
