import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  nav {
    display: flex;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  /* justify-content: space-between; */
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: all 200ms linear;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #8c98ba;
  }
`;
