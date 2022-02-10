import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    </>
  );
};

export default Layout;
