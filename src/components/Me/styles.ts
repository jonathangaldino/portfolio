import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 145px;
    height: auto;

    margin-top: 35px;
    margin-bottom: 25px;
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 11px;
  }

  h3 {
    font-size: 16px;
    width: 80%;
    text-align: center;

    margin-bottom: 35px;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(68, 68, 68, 0.75),
      rgba(0, 0, 0, 0)
    );

    width: 80%;

    &::after {
      /* content: '§';
      display: inline-block;
      position: relative;
      top: -0.7em;
      font-size: 1.5em;
      padding: 0 0.25em;
      background: white; */
    }
  }
`;
