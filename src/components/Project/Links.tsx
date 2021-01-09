import React from 'react';
import styled from 'styled-components';

export interface Props {
  web?: string;
  apple?: string;
  google?: string;
}

const Links: React.FC<Props> = ({ apple, google}) => {
  return (
    <Container>
      {/* <Link href={web} target="__blank" shouldDisable={web ? false : true}>
        <img src="/browser.svg" alt="Browser" />
      </Link> */}

      <Link href={apple} target="__blank" shouldDisable={apple ? false : true}>
        <img src="/applestore.svg" alt="Browser" />
      </Link>

      <Link href={google} target="__blank" shouldDisable={google ? false : true}>
        <img src="/googlestore.svg" alt="Browser" />
      </Link>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 28px;

`;

interface LinkProps {
  shouldDisable?: boolean;
}

const Link = styled.a<LinkProps>`
  opacity: ${props => props.shouldDisable ? 0.4 : 1};

  img {
    width: 38px;
    height: 38px;
  }

  margin-right: 20px;
`;

export default Links;