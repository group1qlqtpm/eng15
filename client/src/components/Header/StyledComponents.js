import styled from 'styled-components';
import { Row, Col } from 'antd';

export const HeaderWrapper = styled(Row)`
  position: relative;
  width: 100%;
`;

export const TopWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 12px;
`;

export const BackGroundImg = styled.img`
  width: 33.33%;
  float: left;
`;

export const User = styled(Col)`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
`;

export const Logo = styled.img`
  width: 300px;

  @media screen and (max-width: 1600px) {
    width: 200px;
  }

  @media screen and (max-width: 1100px) {
    width: 120px;
  }

  @media screen and (max-width: 900px) {
    width: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 40px;
  }
`;
