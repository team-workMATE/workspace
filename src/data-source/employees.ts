import { DataSource } from "@toolpad/core";
import { getEmployeesStore, setEmployeesStore } from "../data-store/EmployeeStore";
import { Employee } from "../model/Employee";
import { z } from 'zod';

export const employeesDataSource: DataSource<Employee> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'age', headerName: 'Age', type: 'number' },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      valueGetter: (value: string) => value && new Date(value),
      width: 140,
    },
    {
      field: 'role',
      headerName: 'Department',
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development'],
      width: 160,
    },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    let filteredEmployees = [...employeesStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredEmployees = filteredEmployees.filter((employee) => {
          const employeeValue = employee[field];

          switch (operator) {
            case 'contains':
              return String(employeeValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return employeeValue === value;
            case 'startsWith':
              return String(employeeValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(employeeValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (employeeValue as number) > value;
            case '<':
              return (employeeValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredEmployees.sort((a, b) => {
        for (const { field, sort } of sortModel) {
          if ((a[field] as number) < (b[field] as number)) {
            return sort === 'asc' ? -1 : 1;
          }
          if ((a[field] as number) > (b[field] as number)) {
            return sort === 'asc' ? 1 : -1;
          }
        }
        return 0;
      });
    }

    // Apply pagination
    const start = paginationModel.page * paginationModel.pageSize;
    const end = start + paginationModel.pageSize;
    const paginatedEmployees = filteredEmployees.slice(start, end);

    return {
      items: paginatedEmployees,
      itemCount: filteredEmployees.length,
    };
  },
  getOne: async (employeeId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    const employeeToShow = employeesStore.find((employee) => employee.id === Number(employeeId));

    if (!employeeToShow) {
      throw new Error('Employee not found');
    }
    return employeeToShow;
  },
  createOne: async (data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    const newEmployee = {
      id: employeesStore.reduce((max, employee) => Math.max(max, employee.id), 0) + 1,
      ...data,
    } as Employee;

    setEmployeesStore([...employeesStore, newEmployee]);

    return newEmployee;
  },
  updateOne: async (employeeId, data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    let updatedEmployee: Employee | null = null;

    setEmployeesStore(
      employeesStore.map((employee) => {
        if (employee.id === Number(employeeId)) {
          updatedEmployee = { ...employee, ...data };
          return updatedEmployee;
        }
        return employee;
      }),
    );

    if (!updatedEmployee) {
      throw new Error('Employee not found');
    }
    return updatedEmployee;
  },
  deleteOne: async (employeeId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    setEmployeesStore(employeesStore.filter((employee) => employee.id !== Number(employeeId)));
  },
  validate: z.object({
    name: z.string({ required_error: 'Name is required' }).nonempty('Name is required'),
    age: z.number({ required_error: 'Age is required' }).min(18, 'Age must be at least 18'),
    joinDate: z
      .string({ required_error: 'Join date is required' })
      .nonempty('Join date is required'),
    role: z.enum(['Market', 'Finance', 'Development'], {
      errorMap: () => ({ message: 'Role must be "Market", "Finance" or "Development"' }),
    }),
  })['~standard'].validate,
};

export const employeeDataSourceList: DataSource<Employee> &
  Required<Pick<DataSource<Employee>, 'getMany'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'age', headerName: 'Age', type: 'number' },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      valueGetter: (value: string) => value && new Date(value),
      width: 140,
    },
    {
      field: 'role',
      headerName: 'Department',
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development'],
      width: 160,
    },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    let filteredEmployees = [...employeesStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredEmployees = filteredEmployees.filter((employee) => {
          const employeeValue = employee[field];

          switch (operator) {
            case 'contains':
              return String(employeeValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return employeeValue === value;
            case 'startsWith':
              return String(employeeValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(employeeValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (employeeValue as number) > value;
            case '<':
              return (employeeValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredEmployees.sort((a, b) => {
        for (const { field, sort } of sortModel) {
          if ((a[field] as number) < (b[field] as number)) {
            return sort === 'asc' ? -1 : 1;
          }
          if ((a[field] as number) > (b[field] as number)) {
            return sort === 'asc' ? 1 : -1;
          }
        }
        return 0;
      });
    }

    // Apply pagination
    const start = paginationModel.page * paginationModel.pageSize;
    const end = start + paginationModel.pageSize;
    const paginatedEmployees = filteredEmployees.slice(start, end);

    return {
      items: paginatedEmployees,
      itemCount: filteredEmployees.length,
    };
  },
  getOne: async (employeeId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    const employeeToShow = employeesStore.find((employee) => employee.id === Number(employeeId));

    if (!employeeToShow) {
      throw new Error('Employee not found');
    }
    return employeeToShow;
  },
};

export const employeeDataSourceSingle: DataSource<Employee> &
  Required<Pick<DataSource<Employee>, 'getOne'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'age', headerName: 'Age', type: 'number' },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      valueGetter: (value: string) => value && new Date(value),
      width: 140,
    },
    {
      field: 'role',
      headerName: 'Department',
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development'],
      width: 160,
    },
  ],
  getOne: async (employeeId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getEmployeesStore();

    const employeeToShow = employeesStore.find((employee) => employee.id === Number(employeeId));

    if (!employeeToShow) {
      throw new Error('Employee not found');
    }
    return employeeToShow;
  },
};