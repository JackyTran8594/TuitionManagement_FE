import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản lý học viên',
    icon: 'archive-outline',
    link: '/pages/student',
  },
  {
    title: 'Thu phí',
    icon: 'archive-outline',
    link: '/pages/fee',
  },
  {
    title: 'Quản trị hệ thống',
    icon: 'settings-outline',
    children: [
      {
        title: 'Quản lý người dùng',
        icon:'person-outline',
        link: '/pages/system-management/user',
      },
      {
        title: 'Quản lý phân quyền',
        icon:'person-done-outline',
        link: '/pages/system-management/role-group',
      },
      {
        title: 'Quản lý đơn vị',
        icon:'person-done-outline',
        link: '/pages/system-management/accounts',
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
