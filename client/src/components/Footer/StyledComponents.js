import styled from 'styled-components';
import { Row } from 'antd';

export const FooterWrapper = styled(Row)`
  position: relative;
  width: 100%;
`;

export const FixedFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const BackGroundImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  transform: rotate(180deg);
`;
