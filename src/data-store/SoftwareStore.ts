import { Software } from "../model/Software";

const INITIAL_SOFTWARE_STORE: Software[] = [
  {
    id: 1,
    name: 'Git',
  },
  {
    id: 2,
    name: 'Maven',
  },
  {
    id: 3,
    name: 'QuickBooks',
  },
  {
    id: 4,
    name: 'Microsoft Office 365',
  },
];

export const getSoftwareStore = (): Software[] => {
  const value = localStorage.getItem('software-store');
  return value ? JSON.parse(value) : INITIAL_SOFTWARE_STORE;
};

export const setSoftwareStore = (value: Software[]) => {
  return localStorage.setItem('software-store', JSON.stringify(value));
};