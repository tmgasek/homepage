import NextLink from 'next/link';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

import { Box, Heading, Text, Link, Flex, Icon, Button } from '@chakra-ui/react';

const WorkItem = ({
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
      borderColor={'blackAlpha.800'}
      bg={'blackAlpha.300'}
      shadow={'xl'}
      position={'relative'}
    >
      <Image src={thumbnail} placeholder="blur" loading="lazy" alt={title} />
      <Box px={4} pb={2}>
        <Box>
          <Heading as={'h2'} size={'lg'} fontWeight={'light'}>
            {title}
          </Heading>
          <Text fontSize={'sm'} py={1}>
            {children}
          </Text>
        </Box>

        <Flex gap={[1, 2]} py={2} align={'center'}>
          <NextLink href={githubLink} passHref>
            <Link>
              <Button size={'sm'} variant={'ghost'}>
                <Icon as={AiFillGithub} w={5} h={5} />
              </Button>
            </Link>
          </NextLink>
          <NextLink href={blogLink} passHref>
            <Link>
              <Button size={'sm'}>About</Button>
            </Link>
          </NextLink>
          <NextLink href={liveLink} passHref>
            <Link>
              <Button size={'sm'}>Live site</Button>
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default WorkItem;
