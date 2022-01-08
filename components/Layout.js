import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tomasz Gasek - Homepage</title>
      </Head>

      <Navbar />

      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
