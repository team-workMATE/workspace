import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { Software } from "../model/Software";
import { softwareDataSource } from '../data-source/software';
import { getRootPath, RootPath } from "../RootPath";

export default function SoftwarePage() {
  return (
    <Crud<Software>
      dataSource={softwareDataSource}
      rootPath={getRootPath(RootPath.Software)}
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}