import { DataModel } from "@toolpad/core";

export interface Employee extends DataModel {
  id: number;
  name: string;
  age: number;
  joinDate: string;
  role: EmployeeRole;
}