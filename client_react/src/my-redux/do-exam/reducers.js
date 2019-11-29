import { GET_QUESTION_OF_EXAM } from "./constants";
import {
  typeAPIRequest,
  typeAPISuccess,
  typeAPIFail
} from "utils/api/constants";

import { fields } from "./constants";

export const initialState = {
  loading: false,
  examDetail: {
    [fields.DATA_LIST]: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case typeAPIRequest(GET_QUESTION_OF_EXAM):
      return {
        ...state,
        loading: true
      };

    case typeAPISuccess(GET_QUESTION_OF_EXAM):
      return {
        ...state,
        loading: false,
        examDetail: {
          class: "Lớp 5",
          semester: "Cuối học kì 1 - Bài kiểm tra số 1",
          dataList: action.payload
        }
      };

    case typeAPIFail(GET_QUESTION_OF_EXAM):
      return initialState;

    default:
      return state;
  }
};
