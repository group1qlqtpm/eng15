// The apiUrl function name: {method}{action}
export const endpoint = 'http://localhost:3000';

export const postLogin = () => `${endpoint}/user/login`;
export const postLogout = () => `${endpoint}/user/logout`;
export const getUserInfo = () => `${endpoint}/user/info`;

export const getUserList = () => `${endpoint}/user`;
export const postCreateUser = () => `${endpoint}/user`;
export const putEditUser = (id) => `${endpoint}/user/${id}`;
export const deleteEditUser = (id) => `${endpoint}/user/${id}`;
export const getUserDetail = (id) => `${endpoint}/user/${id}`;

// export const getQuestionOfAnExam = (id) => `${endpoint}/exam/question/${id}`;
export const getQuestionOfAnExam = (id) => `${endpoint}/data.json`;
