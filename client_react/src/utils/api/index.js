import axios from "axios";
import qs from "query-string";

import {
  METHOD,
  typeAPIRequest,
  typeAPISuccess,
  typeAPIFail
} from "./constants";

const apiAction = (
  dispatch,
  action,
  url,
  method = METHOD.GET,
  data = {},
  headers = {}
) =>
  new Promise((resolve, reject) => {
    dispatch({ type: typeAPIRequest(action) });
    axios({
      method,
      headers: { "Content-Type": "application/json", ...headers },
      data: qs.stringify(data),
      url
    })
      .then(res => {
        dispatch({ type: typeAPISuccess(action), payload: res.data.data });
        resolve(res.data.data);
      })
      .catch(err => {
        dispatch({ type: typeAPIFail(action) });
        reject(err);
      });
  });

export default apiAction;
