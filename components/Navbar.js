import NextLink from 'next/link';
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
import { useRouter } from 'next/router';
import { AnimateSharedLayout, motion } from 'framer-motion';

const MotionBox = motion(Box);

const LinkItem = ({ href, children, currPath, colorMode }) => {
  const isActive = currPath === href;

  return (
    <NextLink href={href}>
      <Link p={2}>
        {children}
        {isActive && (
          <MotionBox
            layoutId="nav-underline"
            className="nav-underline"
            bg={colorMode === 'dark' ? 'green.500' : 'gray.800'}
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
    name: 'Works',
    href: '/works',
  },
];

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimateSharedLayout>
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
    </AnimateSharedLayout>
  );
};

export default Navbar;
