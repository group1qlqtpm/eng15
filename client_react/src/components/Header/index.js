import React from "react";
import { Avatar, Col } from "antd";

import {
  HeaderWrapper,
  TopWrapper,
  BackGroundImg,
  User,
  Logo
} from "./StyledComponents";

class Header extends React.PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <BackGroundImg src="/top_header_bg.png" />
        <BackGroundImg src="/top_header_bg.png" />
        <BackGroundImg src="/top_header_bg.png" />

        <TopWrapper>
          <Col lg={4} md={4} xs={2} />

          <Col lg={12} md={10} xs={8}>
            <Logo src="/logo.jpg" />
          </Col>

          <User lg={8} md={10} xs={14}>
            Chào,{" "}
            {localStorage.getItem("userLogin") !== undefined
              ? (JSON.parse(localStorage.getItem("userLogin")) || {}).name
              : "Nguyễn Văn A"}{" "}
            &nbsp;
            <Avatar src="/logo.jpg"></Avatar>
          </User>
        </TopWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
