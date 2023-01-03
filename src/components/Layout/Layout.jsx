import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavItem, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
