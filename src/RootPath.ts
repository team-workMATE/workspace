export enum RootPath {
    Employee = '/employees',
    Hardware = '/hardware',
    Software = '/software',
    Permission = '/permissions',
    Order = '/order'
};

export const getRootPath = (path: RootPath) => {
    return String(path);
};