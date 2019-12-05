import styled from "styled-components";
import { Row, Col, Input } from "antd";

export const Wrapper = styled(Row)`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  min-height: 65vh;
  width: 100%;
  margin-bottom: 50px;
`;

export const SubmitButton = styled.button`
  font-weight: 600;
  margin-top: 50px;
  border: 0;
  border-radius: 3;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  min-height: 40px;
  font-size: 20px;
  padding: 0 30px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const CustomCol = styled(Col)`
  padding: 24px;
  margin-bottom: 20px;
`;

export const CustomInput = styled(Input)`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
`;
