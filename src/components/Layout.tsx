import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Layout: React.FunctionComponent = ({ children }) => (
  <Container>{children}</Container>
);

export default Layout;

const Container = styled.main`
  width: 100%;
  padding: 0 25% 30px;

  section {
    padding-bottom: 100px;
  }

  ${media.lessThan("medium")`
    margin: 0;
    
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;
