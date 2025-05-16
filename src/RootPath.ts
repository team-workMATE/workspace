export enum RootPath {
    Employee = '/workspace/employees',
    Hardware = '/workspace/hardware',
    Software = '/workspace/software',
    Permission = '/workspace/permissions',
    Order = '/workspace/order'
};

export const getRootPath = (path: RootPath) => {
    return String(path);
};