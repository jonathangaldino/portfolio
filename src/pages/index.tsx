
import Head from 'next/head';

import * as Styled from './_indexStyles';
import Home from '@components/Home';
import AboutMe from '@components/AboutMe';
import Portfolio from '@components/Portfolio';
import Layout from '@components/Layout';


const App = () => {
  return (
    <Styled.Container>
      <Head>
        <title>Jonathan Galdino</title>
      </Head>

      <Home /> 
      
      <Layout>
        <AboutMe />
        <Portfolio />
      </Layout>    
    </Styled.Container>
  )
}

export default App;
