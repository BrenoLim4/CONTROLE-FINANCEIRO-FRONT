import Despesas from '../Despesas/section';
import LogoFinanceiro from '@/public/images/sections/financeiro.svg';
import { ModuloReducerState } from './interfaces';
import { handleActions } from 'redux-actions';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from '../storage';

const initialState: ModuloReducerState = {
  moduleName: 'Template',
  moduleIcon: LogoFinanceiro,
  sections: [Despesas],
};

const persistConfig = {
  key: 'modulo',
  storage,
  whitelist: [], //Array de reducers a serem persistidos (usuario e session)
  // transforms: [SessionFilter], //Filtro com campos que não serão persistidos
};

const ModuloReducer = persistReducer<ModuloReducerState>(
  persistConfig,
  handleActions({}, initialState)
);

export default ModuloReducer;
