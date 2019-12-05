// The apiUrl function name: {method}{action}
export const endpoint = "http://localhost:1337";

export const postLogin = () => `${endpoint}/account/login`;
export const postRegister = () => `${endpoint}/account/register`;
export const postLogout = () => `${endpoint}/user/logout`;
export const getUserInfo = () => `${endpoint}/user/info`;

export const getUserList = () => `${endpoint}/user`;
export const postCreateUser = () => `${endpoint}/user`;
export const putEditUser = id => `${endpoint}/user/${id}`;
export const deleteEditUser = id => `${endpoint}/user/${id}`;
export const getUserDetail = id => `${endpoint}/user/${id}`;

// export const getQuestionOfAnExam = (id) => `${endpoint}/exam/question/${id}`;
export const getQuestionOfAnExam = id =>
  `${endpoint}/thetest/thetestfromid?id=${id}`;

export const postAddQuestion = () => `${endpoint}/question/add`;
export const postAddQuestionToTestExam = () => `${endpoint}/exam/add-question`;
export const getQuestionList = () => `${endpoint}/question`;
