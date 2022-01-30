import NextLink from 'next/link';
import Image from 'next/image';

import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Flex,
} from '@chakra-ui/react';

const WorkItem = ({ id, title, children, link, thumbnail }) => {
  return (
    <Box
      border={'1px'}
      borderRadius={'2xl'}
      overflow={'hidden'}
      borderColor={'blackAlpha.600'}
      shadow={'dark-lg'}
    >
      <Image src={thumbnail} placeholder="blur" loading="lazy" alt={title} />
      <Box px={2}>
        <Heading as={'h2'} size={'lg'}>
          <NextLink href={`/works/${id}`}>
            <Link cursor={'pointer'}>{title}</Link>
          </NextLink>
        </Heading>
        <Text fontSize={'sm'} py={1}>
          {children}
        </Text>
        <Flex gap={2} py={2} justify={'flex-end'}>
          <Link href={link}>Github repo</Link>
          <Link href={link}>Blog</Link>
          <Link href={link}>Live site</Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default WorkItem;

// <Box w={'100%'}>
//   <NextLink href={`/works/${id}`}>
//     <LinkBox cursor={'pointer'}>
//       <LinkOverlay href={`/works/${id}`}>
//         <Heading>{title}</Heading>
//       </LinkOverlay>
//       <Text>{children}</Text>
//     </LinkBox>
//   </NextLink>
// </Box>
