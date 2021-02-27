import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 35px;
  justify-items: center;
`;

export const Picture = styled.picture``;

export const Portrait = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 45px [row-start]);
  justify-items: center;
  
  h2, h3 {
    color: ${props => props.theme.colors.linen};
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.4rem;
  }
`;

export const Network = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  justify-items: center;

  list-style: none;

  //TODO: Colocar a cor laranja nos SVGs

  img {
    height: 42px;
    width: auto;
  }
`;