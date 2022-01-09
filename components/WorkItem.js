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
    <Box w={'100%'} textAlign={'center'}>
      <Image src={thumbnail} placeholder="blur" loading="lazy" alt={title} />
      <Heading as={'h2'}>
        <NextLink href={`/works/${id}`}>
          <Link cursor={'pointer'}>{title}</Link>
        </NextLink>
      </Heading>
      <Text>{children}</Text>
      <Box>
        <Link mr={6} href={link}>
          Github repo
        </Link>
        <Link href={link}>Live site</Link>
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
