import { Permission } from "../model/Permissions";

const INITIAL_SOFTWARE_STORE: Permission[] = [
  {
    id: 1,
    name: 'Git',
  },
  {
    id: 2,
    name: 'Maven',
  },
];

export const getPermissionStore = (): Permission[] => {
  const value = localStorage.getItem('permission-store');
  return value ? JSON.parse(value) : INITIAL_SOFTWARE_STORE;
};

export const setPermissionStore = (value: Permission[]) => {
  return localStorage.setItem('permission-store', JSON.stringify(value));
};