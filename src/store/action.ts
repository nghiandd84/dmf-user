import * as todosActions from '../features/todos/actions';
import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

const userAction = {
  router: routerActions,
  user: {
    todo: todosActions,
  },
};

export type AppAction = ActionType<typeof userAction>;

export default userAction;
