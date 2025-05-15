import { Crud } from "@toolpad/core";
import { Hardware } from "../model/Hardware";
import { Software } from "../model/Software";
import { softwareDataSource } from '../data-source/software';

export default function SoftwarePage() {
  return (
    <Crud<Software>
      dataSource={softwareDataSource}
      rootPath="/software"
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}