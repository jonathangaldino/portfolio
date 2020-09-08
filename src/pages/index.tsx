
import Head from 'next/head';
import styled from 'styled-components';

import Home from '@components/Home';
import AboutMe from '@components/AboutMe';
import Portfolio from '@components/Portfolio';
import Layout from '@components/Layout';
import Contact from '@components/Contact';


const App = () => {
  return (
    <Container>
      <Head>
        <title>Jonathan Galdino</title>
      </Head>

      <Home /> 
      
      <Layout>
        <AboutMe />
        <Portfolio />
        <Contact />
      </Layout>    
    </Container>
  )
}

export const Container = styled.section`
  height: 100%;
  width: 100%;
`;

export default App;
