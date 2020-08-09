import React from 'react';
import styled from 'styled-components';


const Layout: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
)


const Container = styled.main`
  padding: 0 20% 30px; /* top | horizontal | bottom */
`;


export default Layout;