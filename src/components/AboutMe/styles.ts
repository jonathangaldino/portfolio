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

  /* background: #9bc4bc; */

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }

  a {
    margin-top: 30px;
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
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    img {
      /* max-width: 300px; */
    }
  }
`;
