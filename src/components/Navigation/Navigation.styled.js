import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: all 200ms linear;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #6ebadb;
  }
`;
