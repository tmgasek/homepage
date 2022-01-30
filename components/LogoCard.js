import { Box, useColorModeValue } from '@chakra-ui/react';

import Image from 'next/image';
const LogoCard = ({ name, link }) => {
  return (
    <Box
      _hover={{ bg: 'teal', scale: '0.8' }}
      p={2}
      bg={useColorModeValue('', 'white')}
      boxShadow={'md'}
      rounded={'lg'}
    >
      <Box pos={'relative'} h={'60px'} w={'60px'}>
        <Image layout="fill" objectFit="contain" src={link} alt="" />
      </Box>
    </Box>
  );
};

export default LogoCard;
