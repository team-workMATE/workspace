export enum RootPath {
    Employee = '/employees',
    Hardware = '/hardware',
    Software = '/software',
    Permission = '/permissions',
};

export const getRootPath = (path: RootPath) => {
    return String(path);
};