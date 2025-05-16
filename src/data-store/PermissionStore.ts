import { Permission } from "../model/Permissions";

const INITIAL_SOFTWARE_STORE: Permission[] = [
  {
    id: 1,
    name: 'Github',
  },
  {
    id: 2,
    name: 'JIRA',
  },
  {
    id: 3,
    name: 'Payroll',
  },
  {
    id: 4,
    name: 'Master Key',
  },
  {
    id: 5,
    name: 'Employee Scheduling',
  },
];

export const getPermissionStore = (): Permission[] => {
  const value = localStorage.getItem('permission-store');
  return value ? JSON.parse(value) : INITIAL_SOFTWARE_STORE;
};

export const setPermissionStore = (value: Permission[]) => {
  return localStorage.setItem('permission-store', JSON.stringify(value));
};