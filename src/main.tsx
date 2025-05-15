import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/DashboardLayout';
import DashboardPage from './pages';
import EmployeesPage from './pages/EmployeesPage';
import HardwarePage from './pages/HardwarePage';
import SoftwarePage from './pages/SoftwarePage';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
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
            Component: EmployeesPage,
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
