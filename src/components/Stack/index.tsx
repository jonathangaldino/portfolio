import React from 'react';

import * as Styled from './styles';

const Stack = () => {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Stack</h1>
        <p>The stack I chose to work with</p>
      </Styled.Heading>

      <Styled.Techs>
        <Styled.Tech>
          <Styled.Circle>
            <img src="/nodejs.svg" alt="NodeJS icon" />
          </Styled.Circle>

          <p>Back-end</p>
        </Styled.Tech>

        <Styled.Tech>
          <Styled.Circle>
            <img src="/react.svg" alt="ReactJS icon" />
          </Styled.Circle>

          <p>Front-end</p>
        </Styled.Tech>

        <Styled.Tech>
          <Styled.Circle>
            <img src="/react.svg" alt="React Native icon" />
            <small>React Native</small>
          </Styled.Circle>

          <p>Mobile</p>
        </Styled.Tech>
      </Styled.Techs>
    </Styled.Container>
  )
}

export default Stack;