import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import { composeEnhancers } from './utils';

import rootReducer, { RootState } from './root-reducer';
import rootEpic from './root-epic';

import AppServices, { AppService } from '../services';
import { RootAction } from './root-action';

type RootService = AppService;

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  RootService
>({
  dependencies: AppServices,
});

export const history = createBrowserHistory();

// configure middlewares
const middlewares = [epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState: RootState = {} as any;

// create store
const store = createStore(rootReducer(history), initialState, enhancer);
epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
