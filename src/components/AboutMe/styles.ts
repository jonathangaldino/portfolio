import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    text-transform: uppercase;
    font-size: 48px;
    margin-top: 70px;
    margin-bottom: 110px;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 350px;
    height: 350px;
    border-radius: 12px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    img {
      /* max-width: 300px; */
    }
  }
`;

export const Text = styled.div`
  margin-top: 85px;

  h3 {
    font-size: 18px;
    font-weight: normal;
    border: 0;
    line-height: 24px;
    text-rendering: optimizeLegibility;
    align-self: center;
    text-align: justify;
  }

  /* ${media.lessThan("medium")`
    width: 80vw;
  `} */
`;

export const TechSkill = styled.div`
  margin-left: 1.5%;

  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: 1100px) {
    margin-top: 80px;
  }

  ${media.lessThan("small")`
    max-width: 350px;
  `}

  ${media.lessThan("large")`
    h3 {
      text-align: center;
    }
  `}


  div {
    display: flex;
    flex-wrap: wrap;

    span {
      color: ${(props) => props.theme.colors.textsInverse};
      font-weight: bold;

      padding-right: 10px;
      padding-left: 10px;
      padding-top: 15px;
      padding-bottom: 15px;

      background: ${(props) => props.theme.colors.texts};
      border-radius: 10px;
      margin-right: 5px;
      margin-bottom: 20px;
    }
  }
`;

export const DownloadButton = styled.div`
  margin-top: 35px;
  display: inline-block;
  text-align: center;
  background: ${(props) => props.theme.colors.texts};
  color: ${(props) => props.theme.colors.textsInverse};
  font-weight: bold;
  padding: 1.18em 1em 1.03em;
  line-height: 1;
  border-radius: 0.3em;
  position: relative;
  min-width: 8.23em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textsInverse};
  }
`;
