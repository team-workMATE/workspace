import { Software } from "../model/Software";
import { DataSource } from "@toolpad/core";
import { z } from 'zod';
import { getSoftwareStore, setSoftwareStore } from "../data-store/SoftwareStore";


export const softwareDataSource: DataSource<Software> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getSoftwareStore();

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

    const employeesStore = getSoftwareStore();

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

    const employeesStore = getSoftwareStore();

    const newEmployee = {
      id: employeesStore.reduce((max, employee) => Math.max(max, employee.id), 0) + 1,
      ...data,
    } as Software;

    setSoftwareStore([...employeesStore, newEmployee]);

    return newEmployee;
  },
  updateOne: async (employeeId, data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const employeesStore = getSoftwareStore();

    let updatedEmployee: Software | null = null;

    setSoftwareStore(
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

    const employeesStore = getSoftwareStore();

    setSoftwareStore(employeesStore.filter((employee) => employee.id !== Number(employeeId)));
  },
  validate: z.object({
    name: z.string({ required_error: 'Name is required' }).nonempty('Name is required'),
  })['~standard'].validate,
};

export const softwareDataSourceList: DataSource<Software> &
  Required<Pick<DataSource<Software>, 'getMany'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const softwaresStore = getSoftwareStore();

    let filteredSoftwares = [...softwaresStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredSoftwares = filteredSoftwares.filter((software) => {
          const softwareValue = software[field];

          switch (operator) {
            case 'contains':
              return String(softwareValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return softwareValue === value;
            case 'startsWith':
              return String(softwareValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(softwareValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (softwareValue as number) > value;
            case '<':
              return (softwareValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredSoftwares.sort((a, b) => {
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
    const paginatedSoftwares = filteredSoftwares.slice(start, end);

    return {
      items: paginatedSoftwares,
      itemCount: filteredSoftwares.length,
    };
  },
  getOne: async (softwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const softwaresStore = getSoftwareStore();

    const softwareToShow = softwaresStore.find((software) => software.id === Number(softwareId));

    if (!softwareToShow) {
      throw new Error('Software not found');
    }
    return softwareToShow;
  },
};

export const softwareDataSourceSingle: DataSource<Software> &
  Required<Pick<DataSource<Software>, 'getOne'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getOne: async (softwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const softwareStore = getSoftwareStore();

    const softwareToShow = softwareStore.find((software) => software.id === Number(softwareId));

    if (!softwareToShow) {
      throw new Error('Software not found');
    }
    return softwareToShow;
  },
};