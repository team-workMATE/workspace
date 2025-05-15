import { Crud } from '@toolpad/core/Crud';
import { Employee } from '../model/Employee';
import { employeesDataSource } from '../data-source/employees';
import { getRootPath, RootPath } from '../RootPath';

export default function EmployeesPage() {
  return (
    <Crud<Employee>
      dataSource={employeesDataSource}
      rootPath={getRootPath(RootPath.Employee)}
      initialPageSize={25}
      defaultValues={{ itemCount: 1 }}
    />
  );
}
