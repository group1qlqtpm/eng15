import React from "react";
import styled from "styled-components";

const AnswerButtonStyled = styled.span`
  margin-right: 8px;
  padding: 5px 8px 5px 8px;
  border-radius: 50%;
  border: thin solid #8c8c8c;
`;

const AnswerButton = ({ children, ...props }) => (
  <AnswerButtonStyled {...props}>{children}</AnswerButtonStyled>
);

export default AnswerButton;
