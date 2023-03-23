import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoutButton = styled.button`
  width: 100px;
  padding: 5px 5px;
  border: none;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 16px;
  color: #fff;
  background-color: #6ebadb;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid #6ebadb;
    color: #6ebadb;
    background-color: #fff;
  }
`;
