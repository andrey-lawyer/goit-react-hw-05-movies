import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BlockFlexOne = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;
export const TitleFilm = styled.h1`
  text-align: center;
  margin-bottom: 35px;
`;

export const BlockInfoFilm = styled.div`
  padding-left: 15px;
`;
export const InfoFilm = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Information = styled.p`
  font-size: 16px;
  padding: 0;
  margin-bottom: 15px;
`;

export const BlockInfoToo = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
`;
export const NavBack = styled(NavLink)`
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 3px;
  display: block;
  text-decoration: none;
  color: black;

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
    color: #3f51b5;
  }
`;

export const NavCastReviews = styled(NavLink)`
  margin-bottom: 10px; 
  display: block;
  text-decoration: none;
  color: black;

  :hover:not(.active),
  :focus-visible:not(.active) 
    text-decoration: underline;
  font-size: 18px;
  text-decoration: none;
  color: #3f51b5;

  &.active {
    text-decoration: underline;
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
