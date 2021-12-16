import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import { actions } from '../store';


const rootAction = {
  router: routerActions,
  user: actions.userAction,
};

type RootAction = ActionType<typeof rootAction>;
export default RootAction;
