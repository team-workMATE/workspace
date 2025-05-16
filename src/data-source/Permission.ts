import { Permission } from "../model/Permissions";
import { DataSource } from "@toolpad/core";
import { z } from 'zod';
import { getPermissionStore, setPermissionStore } from "../data-store/Permissions";


export const permissionDataSource: DataSource<Permission> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    let filteredPermissions = [...permissionStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredPermissions = filteredPermissions.filter((permission) => {
          const permissionValue = permission[field];

          switch (operator) {
            case 'contains':
              return String(permissionValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return permissionValue === value;
            case 'startsWith':
              return String(permissionValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(permissionValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (permissionValue as number) > value;
            case '<':
              return (permissionValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredPermissions.sort((a, b) => {
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
    const paginatedPermissions = filteredPermissions.slice(start, end);

    return {
      items: paginatedPermissions,
      itemCount: filteredPermissions.length,
    };
  },
  getOne: async (permissionId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    const permissionToShow = permissionStore.find((permission) => permission.id === Number(permissionId));

    if (!permissionToShow) {
      throw new Error('Permission not found');
    }
    return permissionToShow;
  },
  createOne: async (data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    const newPermission = {
      id: permissionStore.reduce((max, permission) => Math.max(max, permission.id), 0) + 1,
      ...data,
    } as Permission;

    setPermissionStore([...permissionStore, newPermission]);

    return newPermission;
  },
  updateOne: async (permissionId, data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    let updatedPermission: Permission | null = null;

    setPermissionStore(
      permissionStore.map((permission) => {
        if (permission.id === Number(permissionId)) {
          updatedPermission = { ...permission, ...data };
          return updatedPermission;
        }
        return permission;
      }),
    );

    if (!updatedPermission) {
      throw new Error('Permission not found');
    }
    return updatedPermission;
  },
  deleteOne: async (permissionId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    setPermissionStore(permissionStore.filter((permission) => permission.id !== Number(permissionId)));
  },
  validate: z.object({
    name: z.string({ required_error: 'Name is required' }).nonempty('Name is required'),
  })['~standard'].validate,
};

export const permissionDataSourceList: DataSource<Permission> &
  Required<Pick<DataSource<Permission>, 'getMany'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionsStore = getPermissionStore();

    let filteredPermissions = [...permissionsStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredPermissions = filteredPermissions.filter((permission) => {
          const permissionValue = permission[field];

          switch (operator) {
            case 'contains':
              return String(permissionValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return permissionValue === value;
            case 'startsWith':
              return String(permissionValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(permissionValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (permissionValue as number) > value;
            case '<':
              return (permissionValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredPermissions.sort((a, b) => {
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
    const paginatedPermissions = filteredPermissions.slice(start, end);

    return {
      items: paginatedPermissions,
      itemCount: filteredPermissions.length,
    };
  },
  getOne: async (permissionId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionsStore = getPermissionStore();

    const permissionToShow = permissionsStore.find((permission) => permission.id === Number(permissionId));

    if (!permissionToShow) {
      throw new Error('Permission not found');
    }
    return permissionToShow;
  },
};

export const permissionDataSourceSingle: DataSource<Permission> &
  Required<Pick<DataSource<Permission>, 'getOne'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getOne: async (permissionId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const permissionStore = getPermissionStore();

    const permissionToShow = permissionStore.find((permission) => permission.id === Number(permissionId));

    if (!permissionToShow) {
      throw new Error('Permission not found');
    }
    return permissionToShow;
  },
};