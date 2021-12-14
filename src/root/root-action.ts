import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import userAction from '../store/action';

const rootAction = {
  router: routerActions,
  user: userAction,
};

export type RootAction = ActionType<typeof rootAction>;
