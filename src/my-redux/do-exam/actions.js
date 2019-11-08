import apiAction from 'utils/api';
import { GET_QUESTION_OF_EXAM } from './constants';
import { getQuestionOfAnExam } from 'config/apiUrl';
import { METHOD } from 'utils/api/constants';

export const getQuestionOfExamAction = (id) => async (dispatch) => {
  const response = await apiAction(
    dispatch,
    GET_QUESTION_OF_EXAM,
    getQuestionOfAnExam(id),
    METHOD.GET,
  );
  console.log('TCL: getQuestionOfExamAction -> response', response);
};
