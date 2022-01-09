import { Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

const Divider = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'dark' ? 'whiteAlpha.600' : 'gray.800'}
      h={'0.5'}
      mb={3}
    ></Box>
  );
};

export default Divider;
