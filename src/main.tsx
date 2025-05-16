import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import HardwarePage from './pages/HardwarePage';
import SoftwarePage from './pages/SoftwarePage';
import PermissionPage from './pages/PermissionsPage';
import OrderStepFlow from './pages/OrderStepFlow';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/workspace/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: '/workspace/employees/:id?/*',
            Component: EmployeesPage,
          },
          {
            path: '/workspace/hardware/:id?/*',
            Component: HardwarePage,
          },
          {
            path: '/workspace/software/:id?/*',
            Component: SoftwarePage,
          },
          {
            path: '/workspace/permissions/:id?/*',
            Component: PermissionPage,
          },
          {
            path: '/workspace/order/:id?/*',
            Component: OrderStepFlow,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
