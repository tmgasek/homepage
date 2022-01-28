import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as={'nav'} pt={4}>
      <Container maxW={'container.lg'}>
        <Flex align={'center'} justify={'space-between'}>
          <Box>
            <NextLink href="/">
              <Heading
                as={'h1'}
                size={'lg'}
                letterSpacing={'tighter'}
                pr={8}
                cursor={'pointer'}
              >
                {'{tmg}'}
              </Heading>
            </NextLink>
          </Box>

          <Flex>
            <Box display={{ base: 'none', sm: 'flex' }}>
              <LinkItem href="/" path={router.path}>
                About
              </LinkItem>
              <LinkItem href="/posts" path={router.path}>
                Posts
              </LinkItem>
              <LinkItem href="/works" path={router.path}>
                Works
              </LinkItem>
            </Box>

            <Button onClick={toggleColorMode} ml={5} w={'1'}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Box
              flex={1}
              align="right"
              display={{ base: 'inline-block', sm: 'none' }}
            >
              <Box ml={2}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <NextLink href="/" passHref>
                      <MenuItem as={Link}>About</MenuItem>
                    </NextLink>
                    <NextLink href="/works" passHref>
                      <MenuItem as={Link}>Works</MenuItem>
                    </NextLink>
                    <NextLink href="/posts" passHref>
                      <MenuItem as={Link}>Posts</MenuItem>
                    </NextLink>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
