import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import doExam from "./do-exam/reducers";
import question from "./question/reducers";

export default history =>
  combineReducers({
    router: connectRouter(history),
    doExam,
    question
  });
