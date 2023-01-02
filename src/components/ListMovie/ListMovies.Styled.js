import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-size: 20px;
  padding-top: 10px;
  color: #1631cd;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    text-decoration: underline;
  }
`;

export const TitleTrending = styled.h1`
  margin-bottom: 10px;
  margin-top: 10px;
`;
