import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import doExam from './do-exam/reducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    doExam,
  });
