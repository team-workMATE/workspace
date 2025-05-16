import { Order } from '../model/Order';

const ORDER_STORE: Order[] = [
  
];

export const getOrderStore = (): Order[] => {
  const value = localStorage.getItem('order-store');
  return value ? JSON.parse(value) : ORDER_STORE;
};

export const setOrderStore = (value: Order[]) => {
  return localStorage.setItem('order-store', JSON.stringify(value));
};