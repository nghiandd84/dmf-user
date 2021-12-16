import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import todosReducer from '../features/todos/reducer';
import { History, createBrowserHistory } from 'history';
import { reducer } from '../store';
import { StateType } from 'typesafe-actions';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: reducer.userReducer,
  });

const rootReducerType = combineReducers({
  router: connectRouter(createBrowserHistory()),
  user: combineReducers({
    todo: todosReducer,
  }),
});

export type RootState = StateType<typeof rootReducerType>;

export default rootReducer;
