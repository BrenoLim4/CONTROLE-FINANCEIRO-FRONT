import { DespesasReducerState } from './interfaces';
import EmpenhosReducer from './Empenhos/reducer';
import LiquidacoesReducer from './Liquidacoes/reducer';
import PagamentosReducer from './Pagamentos/reducer';
import DespesaReducer from './Despesas/reducer';
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist-indexeddb-storage';

const persistConfig = {
  key: 'Despesas',
  storage: storage('despesas'),
  // whitelist: ['Empenhos'], //Array de reducers a serem persistidos (usuario e Empenhos)
  // transforms: [EmpenhosFilter], //Filtro com campos que não serão persistidos
};

const DespesasReducer = persistReducer<DespesasReducerState>(
  persistConfig,
  combineReducers<DespesasReducerState>({
    empenhos: EmpenhosReducer,
    liquidacoes: LiquidacoesReducer,
    pagamentos: PagamentosReducer,
    despesas: DespesaReducer,
  })
);

export default DespesasReducer;
