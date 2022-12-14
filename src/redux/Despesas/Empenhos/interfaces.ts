import { Liquidacao } from '../Liquidacoes/interfaces';
import { Pagamento } from '../Pagamentos/interfaces';

export interface EmpenhosProps {
  empenhos: Empenho[];
  empenho: EmpenhoDetalhes;

  fontesRecurso: FonteRecurso[];
  errorFontesRecurso: string;

  status: Status[];
  errorStatus: string;

  loadingEmpenhos: boolean;
  errorEmpenhos: string;
  currentPageEmpenhos: number;

  loadingEmpenho: boolean;
  errorEmpenho: string;
  paramsNavegacao: Navegacao;

  filters: Filters;
}

export interface Empenho {
  id: string;
  numero: string;
  exercicio: string;
  dataEmissao: string;
  valor: number;
  valorPago: number;
  saldoAPagar: number;
  cpfCnpjCredor: string;
  razaoSocialCredor: string;
  numeroProtocolo: string;
  isnParcela: string;
  fonteId: number;
  fonteDescricao: string;
  status: string;
}

export interface EmpenhoDetalhes extends Empenho {
  natureza: string;
  efeito: string;
  projeto: string;
  classificacaoOrcamentariaCompleto: string;
  classificacaoOracamentariaReduzida: string;
  especificacaoGeral: string;
  cpfOrdenadorDespesa: string;
  numeroContrato: string;
  numeroConvenio: string;
  liquidacoes: Liquidacao[];
  pagamentos: Pagamento[];
}

export interface Filters {
  numero: string;
  exercicio: string;
  credor: string;
  numeroProtocolo: string;
  fonteId: string;
  statusDescricao: string;
}

export interface FonteRecurso {
  id: number;
  descricao: string;
}

export interface Status {
  descricao: string;
}

interface Navegacao {
  codigoObra: string;
  idMedicao: number;
}
