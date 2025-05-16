import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import ApiIcon from '@mui/icons-material/Api';
import KeyIcon from '@mui/icons-material/Key';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'workspace/',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'workspace/employees',
    title: 'Employees',
    icon: <PersonIcon />,
    pattern: '/workspace/employees{/:id}*',
  },
  {
    segment: 'workspace/hardware',
    title: 'Hardware',
    icon: <ComputerIcon />,
    pattern: '/workspace/hardware{/:id}*',
  },
  {
    segment: 'workspace/software',
    title: 'Software',
    icon: <ApiIcon />,
    pattern: '/workspace/software{/:id}*',
  },
  {
    segment: 'workspace/permissions',
    title: 'Permissions',
    icon: <KeyIcon />,
    pattern: '/workspace/permissions{/:id}*',
  },
  {
    segment: 'workspace/order',
    title: 'Create Order',
    icon: <AddBoxIcon />,
    pattern: '/workspace/order{/:id}*',
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
