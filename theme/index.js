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
        color: mode('gray.800', 'whiteAlpha.800')(props),
        bg: mode('gray.200', '#181818')(props),
      },
      a: {
        _focus: {},
      },
    }),
  },
  fonts: {
    heading: 'IBM Plex Sans Thai Looped',
    body: 'IBM Plex Sans Thai Looped',
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: 'wide',
        fontWeight: 'semibold',
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
