import styled from 'styled-components';
import { Row } from 'antd';
import { Radio } from 'antd';

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

export const Answer = styled(Radio.Button)`
  margin-right: 8px;
`;
