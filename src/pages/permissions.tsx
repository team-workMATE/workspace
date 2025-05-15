import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { Permission } from "../model/Permissions";

export default function PermissionCrudPage() {
  return (
    <Crud<Permission>
    //   dataSource={employeesDataSource}
      rootPath="/permissions"
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}