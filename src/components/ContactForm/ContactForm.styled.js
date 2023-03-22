import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border: 2px solid gray;
`;

export const FormLabel = styled.label`
  margin-top:10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
`;

export const FormInput = styled.input`
  margin-top:10px;
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