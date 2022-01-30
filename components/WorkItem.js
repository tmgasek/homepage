import NextLink from 'next/link';
import Image from 'next/image';
import { AiFillGithub, AiOutlineRight } from 'react-icons/ai';

import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';

const WorkItem = ({
  id,
  title,
  children,
  githubLink,
  liveLink,
  blogLink,
  thumbnail,
}) => {
  return (
    <Box
      border={'1px'}
      borderRadius={'md'}
      overflow={'hidden'}
      borderColor={'blackAlpha.600'}
      shadow={'dark-lg'}
      position={'relative'}
    >
      <Image src={thumbnail} placeholder="blur" loading="lazy" alt={title} />
      <Box px={2}>
        <Box>
          <Heading as={'h2'} size={'lg'}>
            <NextLink href={`/works/${id}`}>
              <Link cursor={'pointer'}>{title}</Link>
            </NextLink>
          </Heading>
          <Text fontSize={'sm'} py={1}>
            {children}
          </Text>
        </Box>

        <Flex gap={[1, 2]} py={2}>
          <Link href={githubLink}>
            <Button size={'sm'}>
              <Icon as={AiFillGithub} w={5} h={5} />
            </Button>
          </Link>
          <Link href={blogLink}>
            <Button size={'sm'}>Blog</Button>
          </Link>
          <Link href={liveLink}>
            <Button size={'sm'}>Live site</Button>
          </Link>
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
