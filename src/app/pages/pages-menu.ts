import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản lý học viên',
    icon: 'person-outline',
    link: '/pages/student',
  },
  {
    title: 'Quản lý thu phí',
    icon: 'credit-card-outline',
    link: '/pages/tuition',
  },
  {
    title: 'Quản lý lệ phí',
    icon: 'credit-card-outline',
    link: '/pages/fee',
  },
  {
    title: 'Quản trị hệ thống',
    icon: 'settings-outline',
    children: [
      {
        title: 'Quản lý người dùng',
        icon: 'person-outline',
        link: '/pages/system-management/user',
      },
      {
        title: 'Quản lý phân quyền',
        icon: 'person-done-outline',
        link: '/pages/system-management/role-group',
      },
    ],

  },
  {
    title: 'Quản lý danh mục',
    icon: 'book-outline',
    children: [
      {
        title: 'Đối tượng',
        icon: 'person-outline',
        link: '/pages/category/object-list',
      },
      {
        title: 'Lệ phí',
        icon: 'credit-card-outline',
        link: '/pages/category/fee-list',
      },
      {
        title: 'Hạng đào tạo',
        icon: 'award-outline',
        link: '/pages/category/train-class',
      },
    ],

  },

  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
