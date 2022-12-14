import DespesasReducer from './Despesas/reducer';
import { DespesasReducerState } from './Despesas/interfaces';
import ModuloReducer from './Modulo/reducer';
import { ModuloReducerState } from './Modulo/interfaces';
import SessionReducer from './Session/reducer';
import { SessionReducerState } from './Session/interfaces';
import UserReducer from './User/reducer';
import { UserReducerState } from './User/interfaces';
import { combineReducers } from 'redux';

interface RootReducer {
  Session: SessionReducerState;
  Modulo: ModuloReducerState;
  User: UserReducerState;
  Despesas: DespesasReducerState;
}

const rootReducer = combineReducers<RootReducer>({
  Session: SessionReducer,
  Modulo: ModuloReducer,
  User: UserReducer,
  Despesas: DespesasReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
