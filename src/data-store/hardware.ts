import { Hardware } from "../model/Hardware";

const INITIAL_HARDWARE_STORE: Hardware[] = [
  {
    id: 1,
    name: 'Windows',
  },
  {
    id: 2,
    name: 'Mac',
  },
];

export const getHardwareStore = (): Hardware[] => {
  const value = localStorage.getItem('hardware-store');
  return value ? JSON.parse(value) : INITIAL_HARDWARE_STORE;
};

export const setHardwareStore = (value: Hardware[]) => {
  return localStorage.setItem('hardware-store', JSON.stringify(value));
};