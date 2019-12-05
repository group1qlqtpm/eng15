import apiAction from "utils/api";
import {
  POST_REGISTER,
  POST_LOGIN,
  GET_QUESTION_OF_EXAM,
  POST_ADD_NEW_QUESTION,
  POST_ADD_QUESTION_TO_TEST
} from "./constants";
import {
  postRegister,
  postLogin,
  getQuestionOfAnExam,
  postAddQuestion,
  postAddQuestionToTestExam
} from "config/apiUrl";
import { METHOD } from "utils/api/constants";

export const getQuestionOfExamAction = (id, callback) => async dispatch => {
  console.log(getQuestionOfAnExam(id));
  const response = await apiAction(
    dispatch,
    GET_QUESTION_OF_EXAM,
    getQuestionOfAnExam(id),
    METHOD.GET
  );

  if (callback) {
    callback(response);
  }
};

export const loginAction = (body, callback) => async dispatch => {
  const response = await apiAction(
    dispatch,
    POST_LOGIN,
    postLogin(),
    METHOD.POST,
    body
  );

  if (callback) {
    callback(response);
  }
};

export const registerAction = (body, callback) => async dispatch => {
  const response = await apiAction(
    dispatch,
    POST_REGISTER,
    postRegister(),
    METHOD.POST,
    body
  );

  if (callback) {
    callback(response);
  }
};

export const addQuestionAction = (
  body,
  callback = () => {}
) => async dispatch => {
  const response = await apiAction(
    dispatch,
    POST_ADD_NEW_QUESTION,
    postAddQuestion(),
    METHOD.POST,
    body
  );

  if (callback) {
    callback(response);
  }
};

export const addQuestionToTestExamAction = (
  body,
  callback = () => {}
) => async dispatch => {
  const response = await apiAction(
    dispatch,
    POST_ADD_QUESTION_TO_TEST,
    postAddQuestionToTestExam(),
    METHOD.POST,
    body
  );

  if (callback) {
    callback(response);
  }
};
