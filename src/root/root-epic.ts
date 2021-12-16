import { combineEpics } from 'redux-observable';

import { epic } from '../store';

const rootEpics = combineEpics(...epic.userEpic);

export default rootEpics;
