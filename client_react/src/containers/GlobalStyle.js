import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const BackGround = styled.div`
  background-image: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Content = styled.div`
  min-height: 76vh;
`;
