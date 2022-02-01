import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      'html, body': {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.200', 'gray.800')(props),
      },
    }),
  },
  fonts: {
    heading: 'Lato',
    body: 'Lato',
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: 'wide',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
      },
    },
  },
  colors: {},
});

export default theme;
