import React from 'react';
import styled from 'styled-components';

export interface Props {
  apple?: string;
  google?: string;
  github?: string;
}

const Links: React.FC<Props> = ({ apple, google, github }) => {

  const hasAppleLink = apple ? true : false;
  const hasGoogleLink = google ? true : false;
  const hasGithubLink = github ? true : false;

  return (
    <Container>
      {
        hasAppleLink && <Link href={apple} target="__blank">
          <img src="/applestore.svg" alt="Browser" />
        </Link>
      }

      {
        hasGoogleLink && <Link href={google} target="__blank">
          <img src="/googlestore.svg" alt="Browser" />
        </Link>
      }

      {
        hasGithubLink && <Link href={github} target="__blank">
          <img src="/github.svg" alt="Browser" />
        </Link>
      }
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
  img {
    width: 38px;
    height: 38px;
  }

  margin-right: 20px;
`;

export default Links;