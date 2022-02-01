import '@fontsource/lato';

import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/';
import theme from '../theme';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
