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
        bg: mode('#FAFAFA', '#242526')(props),
      },
      a: {
        _focus: {},
      },
    }),
  },
  fonts: {
    heading: 'Lora',
    body: 'Titillium Web',
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
        fontWeight: 'semibold',
      },
    },
  },
  colors: {},
});

export default theme;
