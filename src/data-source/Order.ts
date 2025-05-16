import { DataSource } from "@toolpad/core";
import { Order } from "../model/Order";
import { getOrderStore } from "../data-store/OrderStore";

export const orderDataSource: DataSource<Order> &
  Required<Pick<DataSource<Order>, 'getOne'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
  ],
  getOne: async (employeeId) => {
      // Simulate loading delay
      await new Promise((resolve) => {
        setTimeout(resolve, 750);
      });
  
      const employeesStore = getOrderStore();
  
      const employeeToShow = employeesStore.find((employee) => employee.id === employeeId);
  
      if (!employeeToShow) {
        throw new Error('Order not found');
      }
      return employeeToShow;
    },
};