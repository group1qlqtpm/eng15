import React from 'react';

import { FooterWrapper, BackGroundImg, FixedFooter } from './StyledComponents';

class Footer extends React.PureComponent {
  render() {
    return (
      <FooterWrapper>
        <FixedFooter>Copyright © 2019</FixedFooter>
        <BackGroundImg src="/top_header_bg.png" />
      </FooterWrapper>
    );
  }
}

export default Footer;
