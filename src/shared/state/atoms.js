import { atom } from 'recoil';

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: localStorage.getItem('isLoggedIn') === 'true',
});

export const userState = atom({
  key: 'userState',
  default: localStorage.getItem('user') === 'null',
});
