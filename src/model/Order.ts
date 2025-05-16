import { DataModel, DataModelId } from "@toolpad/core";

export interface Order extends DataModel {
  id: string;
  employeeId: DataModelId;
  hardwareId: DataModelId;
  softwareId: DataModelId;
  permissionId: DataModelId;
}