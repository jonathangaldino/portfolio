import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${props => props.theme.colors.skillbg};
  transition: background 0.2s;

  width: 100%;
  max-width: 350px;
  height: 275px;

  color: #fff;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.skillbg)};
  }

  img {
    width: 62.75px;
    height: auto;
    margin-top: -30px;
  }

  h3 {
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;
    align-self: flex-start;
    margin-left: 25px;

    font-size: 16px;

    li {
      margin: 10px 0px;
    }
  }
`;
