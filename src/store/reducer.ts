import { combineReducers } from 'redux';
import todosReducer from '../features/todos/reducer';
import { StateType } from 'typesafe-actions';
import { RouterState } from 'connected-react-router';

const userReducer = combineReducers({
  todo: todosReducer,
});

export type UserState = StateType<typeof userReducer>;

export type AppState = {
    [key: string]: any;
    router: RouterState<any>;
    user: UserState;
}

export default userReducer;
