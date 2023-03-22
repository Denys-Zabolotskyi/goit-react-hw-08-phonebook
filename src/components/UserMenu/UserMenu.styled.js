import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button``;
export const LogoutButton = styled.button`
  /* margin: 15px auto 10px; */
  width: 100px;
  padding: 5px 5px;
  border: none;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 18px;
  color: #fff;
  background-color: #8c98ba;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid #8c98ba;
    color: #8c98ba;
    background-color: #fff;
  }
`;
