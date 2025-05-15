import * as React from 'react';
import { Outlet, useLocation, useParams, matchPath } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { RootPath } from '../RootPath';

export default function Layout() {
  const location = useLocation();
  const { id } = useParams();

  const title = React.useMemo(() => {
    if (location.pathname.startsWith(RootPath.Employee)) {
      if (location.pathname === '/employees/new') {
        return 'New Employee';
      }
      if (matchPath('/employees/:id/edit', location.pathname)) {
        return `Employee ${id} - Edit`;
      }
      if (id) {
        return `Employee ${id}`;
      }
    }
    if (location.pathname.startsWith(RootPath.Hardware)) {
      if (location.pathname === '/hardware/new') {
        return 'New Hardware';
      }
      if (matchPath('/hardware/:id/edit', location.pathname)) {
        return `Hardware ${id} - Edit`;
      }
      if (id) {
        return `Hardware ${id}`;
      }
    }

    return undefined;
  }, [location.pathname, id]);

  return (
    <DashboardLayout>
      <PageContainer title={title}>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
