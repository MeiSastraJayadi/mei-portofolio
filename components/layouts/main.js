import { Box, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import MeiObj from '../mei.js';
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <title>Mei Sastra Jayadi - Home Page</title>
      </Head>
      <Navbar path={router.asPath}/>
      <Container maxW={'container.md'} pt={14}>
        <NoSsr>
          <MeiObj/>
        </NoSsr>
        {children}
        <Heading mt={10} align="center" variant={'page-title'} fontSize={13} opacity={0.5}>
          © 2023 Mei Sastra Jayadi. All Rights Reserved.
        </Heading>
      </Container>
    </Box>
  );
}

export default Main;
