export default {
  index: '/',
  login: '/login',
  logout: '/logout',
  register: '/register',
  admin: {
    index: '/admin',
    userManagement: {
      index: '/admin/user-management',
      list: '/admin/user-management',
      add: '/admin/user-management/add',
      edit: '/admin/user-management/edit/:id',
      detail: '/admin/user-management/:id',
    },
  },
  exam: {
    index: '/exam',
    list: '/exam',
    do: '/exam/do/:examId',
  },
};
