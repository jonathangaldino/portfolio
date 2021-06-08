import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    align-self: center;
    text-transform: uppercase;
    font-size: 48px;
    margin-top: 70px;
    margin-bottom: 110px;
  }

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;

    ${media.lessThan("small")`
      width: 300px;
      height: 300px;
    `}
  }

  a {
    margin-top: 50px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.texts};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  h3 {
    margin-top: 65px;
    text-align: center;
    max-width: 700px;

    ${media.lessThan("medium")`
      text-align: justify;
    `}
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
