import { ListSetores } from '@/redux/Gerencial/Medicoes/interfaces';
import { Empenho } from '../Empenhos/interfaces';
import { Liquidacao } from '../Liquidacoes/interfaces';
import { Pagamento } from '../Pagamentos/interfaces';

export interface DespesaProps {
  despesas: DespesaResumo[];
  despesa: DespesaDetalhes;

  loadingDespesas: boolean;
  loadingDespesa: boolean;
  errorGetDespesas: string;
  currentPageDespesas: number;

  statusList: ForFilterPicker[];
  tiposList: ForFilterPicker[];
  categoriasList: ForFilterPicker[];
  setoresList: ListSetores[];

  filters: Filters;
}

export interface Despesa {
  nrProtocolo: string;
  id: number;
  objeto: string;
  dataProtocolo: Date;
  anoMesReferencia: string;
  credorIdentificacao: string;
  credorNome: string;
  valorTotal: number;
  totalEmpenhado: number;
  totalPago: number;
  saldoAPagar: number;
  categoria: string;
  tipo: string;
  status: string;
  statusCor: string;
  setorDespacho: string;
  digital: boolean;
}

export interface DespesaResumo extends Despesa {
  idCategoria: number;
  idTipoDespesa: number;
  idStatus: number;
  digitalExtenso: string;
}

export interface DespesaDetalhes extends Despesa {
  saldoAEmpenhar: number;
  dataVencimento: Date;
  observacao: string;
  empenhos: Empenho[];
  liquidacoes: Liquidacao[];
  pagamentos: Pagamento[];
  historicosDespesa: Historico[];
}

interface Historico {
  id: number;
  idDespesa: number;
  usuarioMatricula: string;
  usuarioNome: string;
  dataHora: Date;
  tipoHistorico: string;
  observacao: string;
}

// interface para pickers de filtragem padrão
export interface ForFilterPicker {
  id: number;
  descricao: string;
}

export interface Filters {
  nrProtocolo: string;
  idCategoria: string;
  idTipoDespesa: string;
  idStatus: string;
  anoMesReferencia: string;
  objeto: string;
  credor: string;
  setorDespacho: string;
  digital: boolean;
}
