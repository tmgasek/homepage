import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Layout = ({ children, title }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title || 'Tomasz Gasek - Homepage'}</title>
      </Head>

      <Container maxW={'container.md'} pt={['16', null, '24']}>
        <motion.main
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          {children}
        </motion.main>
      </Container>
    </Box>
  );
};

export default Layout;
