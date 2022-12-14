import LogoDespesas from '@/public/images/sections/despesas.svg';
import LogoEmpenhos from '@/public/images/sections/empenhos.svg';
import LogoLiquidacoes from '@/public/images/sections/liquidacoes.svg';
import LogoPagamentos from '@/public/images/sections/pagamentos.svg';
import LogoListar from '@/public/images/listar.svg';
import { Section } from '../Modulo/interfaces';

const Despesas: Section = {
  name: 'Despesa',
  sectionIcon: LogoDespesas,
  roles: [
    'FINANCEIRO.MASTER',
    'FINANCEIRO.DESPESA',
    'FINANCEIRO.DESPESA.EMPENHO',
    'FINANCEIRO.DESPESA.LIQUIDACAO',
    'FINANCEIRO.DESPESA.PAGAMENTO',
  ],
  pages: [
    {
      name: 'Lista de despesas',
      link: '/despesas/',
      icon: LogoListar,
      roles: ['FINANCEIRO.MASTER', 'FINANCEIRO.DESPESA'],
      onMenu: true,
    },
    {
      name: 'Empenhos',
      link: '/despesas/empenhos/',
      icon: LogoEmpenhos,
      roles: [
        'FINANCEIRO.MASTER',
        'FINANCEIRO.DESPESA',
        'FINANCEIRO.DESPESA.EMPENHO',
      ],
      onMenu: true,
    },
    {
      name: 'Liquidações',
      link: '/despesas/liquidacoes/',
      icon: LogoLiquidacoes,
      roles: [
        'FINANCEIRO.MASTER',
        'FINANCEIRO.DESPESA',
        'FINANCEIRO.DESPESA.LIQUIDACAO',
      ],
      onMenu: true,
    },
    {
      name: 'Pagamentos',
      link: '/despesas/pagamentos/',
      icon: LogoPagamentos,
      roles: [
        'FINANCEIRO.MASTER',
        'FINANCEIRO.DESPESA',
        'FINANCEIRO.DESPESA.PAGAMENTO',
      ],
      onMenu: true,
    },
  ],
};

export default Despesas;
