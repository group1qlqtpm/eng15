import apiAction from "utils/api";
import { GET_QUESTION_LIST } from "./constants";
import { getQuestionList } from "config/apiUrl";
import { METHOD } from "utils/api/constants";

export const getQuestionOfExamAction = (id, callback) => async dispatch => {
  const response = await apiAction(
    dispatch,
    GET_QUESTION_LIST,
    getQuestionList(),
    METHOD.GET
  );

  if (callback) {
    callback(response);
  }
};
