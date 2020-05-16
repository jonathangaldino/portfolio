import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.skillbg};
  padding-top: 20px;
  padding-bottom: 15px;

  height: 400px;

  color: #fff;

  img {
    width: 75px;
    height: auto;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
  }

  p {
    text-align: center;
    font-size: 16px;

    em {
      font-style: normal;
      color: ${props => props.theme.colors.emphasized};
      margin-left: 5px;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: left;
      padding: 0px 15px;

      svg {
        color: #fff;
      }
    }
  }
`;
