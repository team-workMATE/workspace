import * as React from 'react';
import { Outlet, useLocation, useParams, matchPath } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { getRootPath, RootPath } from '../RootPath';

export default function Layout() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  console.log(id)

  const title = React.useMemo(() => {
    if (location.pathname.startsWith(getRootPath(RootPath.Employee))) {
      if (location.pathname === RootPath.Employee + '/new') {
        return 'New Employee';
      }
      if (matchPath(getRootPath(RootPath.Employee) + '/:id/edit', location.pathname)) {
        return `Employee ${id} - Edit`;
      }
      if (id) {
        return `Employee ${id}`;
      }
    }
    if (location.pathname.startsWith(RootPath.Hardware)) {
      if (location.pathname === RootPath.Hardware + '/new') {
        return 'New Hardware';
      }
      if (matchPath(RootPath.Hardware + '/:id/edit', location.pathname)) {
        return `Hardware ${id} - Edit`;
      }
      if (id) {
        return `Hardware ${id}`;
      }
    }
    if (location.pathname.startsWith(RootPath.Software)) {
      if (location.pathname === RootPath.Software + '/new') {
        return 'New Software';
      }
      if (matchPath(RootPath.Software + '/:id/edit', location.pathname)) {
        return `Software ${id} - Edit`;
      }
      if (id) {
        return `Software ${id}`;
      }
    }
    if (location.pathname.startsWith(RootPath.Permission)) {
      if (location.pathname === RootPath.Permission + '/new') {
        return 'New Permission';
      }
      if (matchPath(RootPath.Permission + '/:id/edit', location.pathname)) {
        return `Permission ${id} - Edit`;
      }
      if (id) {
        return `Permission ${id}`;
      }
    }
    if (location.pathname.startsWith(RootPath.Order)) {
      if (location.pathname === RootPath.Order + '/new') {
        return 'Create Order';
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
