import styled, { css } from "styled-components";
import { Row } from "antd";

export const Wrapper = styled(Row)`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`;

export const Question = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  font-weight: 600;
`;

export const Answer = styled.div`
  cursor: pointer;
  margin: 5px;
  width: fit-content;

  ${props =>
    props.isActive &&
    css`
      color: #2096f3;
      span {
        background-color: #2096f3;
        color: white;
      }
    `}

  &:hover {
    color: #2096f3;
    span {
      background-color: #2096f3;
      color: white;
    }
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;
