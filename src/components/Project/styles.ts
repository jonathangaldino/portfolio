import styled from 'styled-components';

interface ContainerProps {
  image: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: ${props => `url('${props.image}')`};
  background-repeat: no-repeat;

  width: 465px;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 40px;
  padding-bottom: 30px;

  h1, h3 {
    margin: 0;
    padding: 0;
    text-shadow: 0px 2px 0px ${props => props.theme.colors.background};
  }

  h1 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }
`;
