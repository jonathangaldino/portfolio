import React from 'react';

import * as Styled from './styles';

export interface Tech {
  name: string;
  // 0 to 1
  level: number;
}

const Tech: React.FC<Tech> = ({name, level}) => {
  return (
    <Styled.Container level={level}>
      <div>
        <p>{name}</p>
      </div>
    </Styled.Container>
  )
}

export default Tech;