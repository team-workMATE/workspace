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
            path: 'employees/:employeeId?/*',
            Component: EmployeesPage,
          },
          {
            path: 'hardware/:hardwareId?/*',
            Component: HardwarePage,
          },
          {
            path: 'software/:softwareId?/*',
            Component: SoftwarePage,
          },
          {
            path: 'permissions/:permissionId?/*',
            Component: PermissionPage,
          },
          {
            path: 'order/:orderId?/*',
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
