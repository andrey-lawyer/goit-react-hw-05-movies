import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const NavItem = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  margin-left: 15px;
  margin-top: 10px;
  color: white;

  &.active {
    background-color: white;
    color: #3f51b5;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    transform: scale(1.05);
    color: #d3e8e2;
  }
`;
