import styled from 'styled-components';
import media from 'styled-media-query';

interface ContainerProps {
  level: number;
}

export const Container = styled.div<ContainerProps>`
  width: 450px;
  height: 30px;

  
  border-top-right-radius: 22.5px;
  border-bottom-right-radius: 22.5px;
  background: ${props => props.theme.colors.skillbar};
  margin-bottom: 20px;
  
  ${media.lessThan("large")`
    max-width: 400px;
  `}

  div {
    width: ${props => `calc(100% * ${props.level})`};
    max-width: 450px;
    height: 100%;
    padding-left: 10px;
    background: ${props => props.theme.colors.skillbarfulfilled};
    border-top-right-radius: 22.5px;
    border-bottom-right-radius: 22.5px;

    display: flex;
    align-items: center;

    p {
      margin: 0;
      color: ${props => props.theme.colors.textsInverse};
      font-weight: 500;
    }
  }

`;