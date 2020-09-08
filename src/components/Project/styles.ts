import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 400px;
    height: 310px;
    border-radius: 6px;
  }

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  `}

  ${media.lessThan("small")`
    max-width: 85vw;

    img {
      width: 85vw;
    }
  `}
`;

export const Content = styled.div`
  margin-left: 25px;

  ${media.lessThan("large")`
    margin-left: 0;
    margin-top: 25px;
  `}

  h1, h3 {
    margin: 0;
    padding: 0;
    text-shadow: 0px 2px 0px ${props => props.theme.colors.background};
  }

  h1 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
    margin-top: 10px;
    text-align: justify;
  }
`;
