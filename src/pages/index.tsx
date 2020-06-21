
import Head from 'next/head';

import * as Styled from './_indexStyles';
import Home from '@components/Home';
import Stack from '@components/Stack';


const Portfolio = () => {
  return (
    <Styled.Container>
      <Head>
        <title>Jonathan Galdino</title>
      </Head>

      <Home />
      <Stack />
    
    </Styled.Container>
  )
}

export default Portfolio;
