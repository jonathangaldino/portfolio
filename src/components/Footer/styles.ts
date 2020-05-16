import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.skillbg};
  transition: background 0.2s;

  padding-top: 20px;
  padding-bottom: 15px;

  height: 400px;

  color: #fff;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.skillbg)};
  }

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

    width: 80%;

    a {
      font-style: normal;
      color: ${props => props.theme.colors.emphasized};
      margin-left: 5px;
      text-decoration: none;
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
