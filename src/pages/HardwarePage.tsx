import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { getRootPath, RootPath } from "../RootPath";
import { hardwareDataSource } from "../data-source/hardware";

export default function HardwarePage() {
  return (
    <Crud<Hardware>
      dataSource={hardwareDataSource}
      rootPath={getRootPath(RootPath.Hardware)}
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}