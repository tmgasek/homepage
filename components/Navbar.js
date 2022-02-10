import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Container,
  Box,
  Link,
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

const LinkItem = ({ href, children, currPath, colorMode }) => {
  const isActive = currPath === href;

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _focus={{ outlineColor: 'none' }}
        mx={1}
        bg={colorMode === 'light' ? '#fafafa' : '#242526'}
        rounded={'md'}
      >
        {children}
        {isActive && (
          <Box
            h={0.5}
            rounded={'md'}
            bg={colorMode === 'light' ? 'gray.800' : 'green.500'}
          />
        )}
      </Link>
    </NextLink>
  );
};

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Posts',
    href: '/posts',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
];

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as={'nav'} zIndex={100} py={2} position={'fixed'} w={'100%'}>
      <Container maxW={'container.lg'}>
        <Flex align={'center'} justify={'space-between'}>
          <Box>
            <NextLink href="/">
              <Heading
                as={'h1'}
                size={'lg'}
                p={2}
                cursor={'pointer'}
                letterSpacing={'wide'}
                bg={colorMode === 'light' ? '#fafafa' : '#242526'}
                rounded={'md'}
              >
                {'{tmg}'}
              </Heading>
            </NextLink>
          </Box>

          <Flex align={'center'}>
            <Box display={{ base: 'none', sm: 'flex' }}>
              {links.map(({ name, href }) => (
                <LinkItem
                  key={name}
                  href={href}
                  currPath={router.pathname}
                  colorMode={colorMode}
                >
                  {name}
                </LinkItem>
              ))}
            </Box>

            <Button
              variant={'unstyled'}
              mx={1}
              pb={1}
              size={'sm'}
              onClick={toggleColorMode}
              _hover={{
                background: colorMode === 'light' ? 'yellow.500' : 'gray.600',
              }}
              color={colorMode === 'light' ? 'white' : 'black'}
              bg={colorMode === 'light' ? 'gray.600' : 'yellow.500'}
              aria-label={'theme switcher button'}
            >
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
                    size={'sm'}
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    bg={colorMode === 'light' ? '#fafafa' : '#242526'}
                    border={'1px'}
                    aria-label="Options"
                  />
                  <MenuList bg={colorMode === 'light' ? 'gray.200' : '#181818'}>
                    {links.map(({ name, href }) => (
                      <NextLink
                        key={name}
                        href={href}
                        passHref
                        currPath={router.pathname}
                      >
                        <MenuItem as={Link}>{name}</MenuItem>
                      </NextLink>
                    ))}
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
