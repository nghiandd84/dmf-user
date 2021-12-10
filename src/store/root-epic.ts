import { combineEpics } from 'redux-observable';

import * as todosEpics from '../features/todos/epics';
// todosEpics.loadTodosEpic

export default combineEpics(...Object.values(todosEpics));