import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


const Layout: React.FunctionComponent = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default Layout;

const Container = styled.main`
  padding: 0 25% 30px; /* top | horizontal | bottom */

  ${media.lessThan("large")`
    padding: 0 5% 30px;
  `}

  ${media.lessThan("medium")`
    display: flex;
    align-items: center;
    flex-direction: column;
  `}

`;

