import { GET_QUESTION_LIST } from "./constants";
import {
  typeAPIRequest,
  typeAPISuccess,
  typeAPIFail
} from "utils/api/constants";

export const initialState = {
  loading: false,
  // list: [],
  list: Array(10)
    .fill("")
    .map((temp, index) => ({
      id: index + 1,
      key: index + 1,
      question: "Đây là một câu hỏi ahihi"
    }))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case typeAPIRequest(GET_QUESTION_LIST):
      return {
        ...state,
        loading: true
      };

    case typeAPISuccess(GET_QUESTION_LIST):
      return {
        ...state,
        loading: false,
        list: action.payload
      };

    case typeAPIFail(GET_QUESTION_LIST):
      return initialState;

    default:
      return state;
  }
};
