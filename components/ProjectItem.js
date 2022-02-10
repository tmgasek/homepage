import NextLink from 'next/link';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import {
  Box,
  Heading,
  Link,
  Flex,
  Icon,
  Button,
  useColorMode,
} from '@chakra-ui/react';

const ProjectItem = ({
  title,
  children,
  githubLink,
  liveLink,
  blogLink,
  thumbnail,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      overflow={'hidden'}
      shadow={colorMode === 'dark' ? 'dark-lg' : 'xl'}
      position={'relative'}
    >
      <Image src={thumbnail} placeholder="blur" loading="lazy" alt={title} />
      <Box px={4} pb={2}>
        <Box mb={2}>
          <Heading as={'h2'} size={'lg'} fontWeight={'light'}>
            {title}
          </Heading>
          <Box fontSize={'sm'} py={1}>
            {children}
          </Box>
        </Box>

        <Flex gap={[1, 2]} py={2} align={'center'}>
          <NextLink href={githubLink} passHref>
            <Link isExternal>
              <Button size={'sm'}>
                <Icon as={AiFillGithub} w={5} h={5} />
              </Button>
            </Link>
          </NextLink>
          <NextLink href={blogLink} passHref>
            <Link>
              <Button size={'sm'} colorScheme={'gray'}>
                About
              </Button>
            </Link>
          </NextLink>
          <NextLink href={liveLink} passHref>
            <Link isExternal>
              <Button size={'sm'} colorScheme={'green'}>
                Live site
              </Button>
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectItem;
