import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import ApiIcon from '@mui/icons-material/Api';
import KeyIcon from '@mui/icons-material/Key';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Laptop Setup Shopping Cart',
    icon: <DashboardIcon />,
  },
  {
    segment: 'employees',
    title: 'Employees',
    icon: <PersonIcon />,
    pattern: 'employees{/:employeeId}*',
  },
  {
    segment: 'hardware',
    title: 'Hardware',
    icon: <ComputerIcon />,
    pattern: 'hardware{/:hardwareId}*',
  },
  {
    segment: 'software',
    title: 'Software',
    icon: <ApiIcon />,
    pattern: 'software{/:softwareId}*',
  },
  {
    segment: 'permissions',
    title: 'Permissions',
    icon: <KeyIcon />,
    pattern: 'permissions{/:permissionId}*',
  },
];

const BRANDING = {
  title: 'workMATE Automation',
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />

    </ReactRouterAppProvider>
  );
}
