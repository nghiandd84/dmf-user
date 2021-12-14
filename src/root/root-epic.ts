import { combineEpics } from 'redux-observable';

import userEpic from '../store/epic';

export default combineEpics(...userEpic);
