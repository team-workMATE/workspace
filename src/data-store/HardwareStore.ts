import { Hardware } from "../model/Hardware";

const INITIAL_HARDWARE_STORE: Hardware[] = [
  {
    id: 1,
    name: 'Dell',
  },
  {
    id: 2,
    name: 'Mac',
  },
  {
    id: 3,
    name: 'Pager',
  },
  {
    id: 3,
    name: 'Tablet',
  },
];

export const getHardwareStore = (): Hardware[] => {
  const value = localStorage.getItem('hardware-store');
  return value ? JSON.parse(value) : INITIAL_HARDWARE_STORE;
};

export const setHardwareStore = (value: Hardware[]) => {
  return localStorage.setItem('hardware-store', JSON.stringify(value));
};