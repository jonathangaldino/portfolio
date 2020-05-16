import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.skillbg};

  width: 100%;
  max-width: 350px;
  height: 275px;

  color: #fff;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

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

    li {
      margin: 10px 0px;
    }
  }
`;
