import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { Permission } from "../model/Permissions";
import { permissionDataSource } from "../data-source/Permission";
import { getRootPath, RootPath } from "../RootPath";

export default function PermissionPage() {
  return (
    <Crud<Permission>
      dataSource={permissionDataSource}
      rootPath={getRootPath(RootPath.Permission)}
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}