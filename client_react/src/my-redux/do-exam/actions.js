import apiAction from 'utils/api';
import { POST_REGISTER, POST_LOGIN, GET_QUESTION_OF_EXAM } from './constants';
import { postRegister, postLogin, getQuestionOfAnExam } from 'config/apiUrl';
import { METHOD } from 'utils/api/constants';

export const getQuestionOfExamAction = (id, callback) => async (dispatch) => {
  const response = await apiAction(
    dispatch,
    GET_QUESTION_OF_EXAM,
    getQuestionOfAnExam(id),
    METHOD.GET,
  );

  if (callback) {
    callback(response);
  }
};

export const loginAction = (body, callback) => async (dispatch) => {
  const response = await apiAction(
    dispatch,
    POST_LOGIN,
    postLogin(),
    METHOD.POST,
    body,
  );

  if (callback) {
    callback(response);
  }
};

export const registerAction = (body, callback) => async (dispatch) => {
  const response = await apiAction(
    dispatch,
    POST_REGISTER,
    postRegister(),
    METHOD.POST,
    body,
  );

  if (callback) {
    callback(response);
  }
};
