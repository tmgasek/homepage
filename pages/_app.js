import '../styles/globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/';
import theme from '../theme';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Box>
      <Head>
        <title>Tomasz Gasek - Homepage</title>
        <meta
          name="description"
          content="Website and portfolio of Tomasz Gasek"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </Box>
  );
}

export default MyApp;
