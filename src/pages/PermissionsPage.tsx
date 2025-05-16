import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { Permission } from "../model/Permissions";
import { permissionDataSource } from "../data-source/Permissions";

export default function PermissionPage() {
  return (
    <Crud<Permission>
      dataSource={permissionDataSource}
      rootPath="/permissions"
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}