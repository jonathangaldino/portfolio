
import Head from 'next/head';

import * as Styled from './_indexStyles';
import Home from '@components/Home';


const Portfolio = () => {
  return (
    <Styled.Container>
      <Head>
        <title>Jonathan Galdino</title>
      </Head>

      <Home />
    
    </Styled.Container>
  )
}

export default Portfolio;
