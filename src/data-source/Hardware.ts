import { Hardware } from "../model/Hardware";
import { DataSource } from "@toolpad/core";
import { z } from 'zod';
import { getHardwareStore, setHardwareStore } from "../data-store/HardwareStore";


export const hardwareDataSource: DataSource<Hardware> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    let filteredHardwares = [...hardwaresStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredHardwares = filteredHardwares.filter((hardware) => {
          const hardwareValue = hardware[field];

          switch (operator) {
            case 'contains':
              return String(hardwareValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return hardwareValue === value;
            case 'startsWith':
              return String(hardwareValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(hardwareValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (hardwareValue as number) > value;
            case '<':
              return (hardwareValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredHardwares.sort((a, b) => {
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
    const paginatedHardwares = filteredHardwares.slice(start, end);

    return {
      items: paginatedHardwares,
      itemCount: filteredHardwares.length,
    };
  },
  getOne: async (hardwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    const hardwareToShow = hardwaresStore.find((hardware) => hardware.id === Number(hardwareId));

    if (!hardwareToShow) {
      throw new Error('Hardware not found');
    }
    return hardwareToShow;
  },
  createOne: async (data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    const newHardware = {
      id: hardwaresStore.reduce((max, hardware) => Math.max(max, hardware.id), 0) + 1,
      ...data,
    } as Hardware;

    setHardwareStore([...hardwaresStore, newHardware]);

    return newHardware;
  },
  updateOne: async (hardwareId, data) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    let updatedHardware: Hardware | null = null;

    setHardwareStore(
      hardwaresStore.map((hardware) => {
        if (hardware.id === Number(hardwareId)) {
          updatedHardware = { ...hardware, ...data };
          return updatedHardware;
        }
        return hardware;
      }),
    );

    if (!updatedHardware) {
      throw new Error('Hardware not found');
    }
    return updatedHardware;
  },
  deleteOne: async (hardwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    setHardwareStore(hardwaresStore.filter((hardware) => hardware.id !== Number(hardwareId)));
  },
  validate: z.object({
    name: z.string({ required_error: 'Name is required' }).nonempty('Name is required'),
  })['~standard'].validate,
};

export const hardwareDataSourceList: DataSource<Hardware> &
  Required<Pick<DataSource<Hardware>, 'getMany'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getMany: async ({ paginationModel, filterModel, sortModel }) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    let filteredHardwares = [...hardwaresStore];

    // Apply filters (example only)
    if (filterModel?.items?.length) {
      filterModel.items.forEach(({ field, value, operator }) => {
        if (!field || value == null) {
          return;
        }

        filteredHardwares = filteredHardwares.filter((hardware) => {
          const hardwareValue = hardware[field];

          switch (operator) {
            case 'contains':
              return String(hardwareValue).toLowerCase().includes(String(value).toLowerCase());
            case 'equals':
              return hardwareValue === value;
            case 'startsWith':
              return String(hardwareValue).toLowerCase().startsWith(String(value).toLowerCase());
            case 'endsWith':
              return String(hardwareValue).toLowerCase().endsWith(String(value).toLowerCase());
            case '>':
              return (hardwareValue as number) > value;
            case '<':
              return (hardwareValue as number) < value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting
    if (sortModel?.length) {
      filteredHardwares.sort((a, b) => {
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
    const paginatedHardwares = filteredHardwares.slice(start, end);

    return {
      items: paginatedHardwares,
      itemCount: filteredHardwares.length,
    };
  },
  getOne: async (hardwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwaresStore = getHardwareStore();

    const hardwareToShow = hardwaresStore.find((hardware) => hardware.id === Number(hardwareId));

    if (!hardwareToShow) {
      throw new Error('Hardware not found');
    }
    return hardwareToShow;
  },
};

export const hardwareDataSourceSingle: DataSource<Hardware> &
  Required<Pick<DataSource<Hardware>, 'getOne'>> = {
  fields: [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 140 },
  ],
  getOne: async (hardwareId) => {
    // Simulate loading delay
    await new Promise((resolve) => {
      setTimeout(resolve, 750);
    });

    const hardwareStore = getHardwareStore();

    const hardwareToShow = hardwareStore.find((hardware) => hardware.id === Number(hardwareId));

    if (!hardwareToShow) {
      throw new Error('Hardware not found');
    }
    return hardwareToShow;
  },
};