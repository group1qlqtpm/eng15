import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Wrapper = styled(Row)`
  margin-top: 10px;
  margin-bottom: 100px;
`;

export const Content = styled(Col)`
  background-color: white;
  border-radius: 5px;
  padding: 24px;
`;

export const Countdown = styled.div`
  width: 100%;
  font-size: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    width: 50px;
    margin-top: 30px;

    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
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
