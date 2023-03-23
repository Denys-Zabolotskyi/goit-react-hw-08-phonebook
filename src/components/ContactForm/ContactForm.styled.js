import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border: 2px solid gray;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  margin-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
`;

export const FormInput = styled.input`
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
`;

export const FormButton = styled.button`
  margin: 15px auto 10px;
  width: 150px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 20px;
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
