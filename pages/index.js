import NextLink from 'next/link';
import {
  Box,
  Text,
  Heading,
  Flex,
  SimpleGrid,
  Link,
  Button,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { getFeaturedPosts } from '../lib/getPosts';
import { devBlogs, guitarApp } from '../lib/projectData';
import {
  Divider,
  Layout,
  PostCard,
  Section,
  TechStackItem,
} from '../components';

const Home = ({ featuredPosts }) => {
  return (
    <Layout>
      <Box>
        <Heading as={'h1'}>I&apos;m Tomasz and I make websites.</Heading>
        <Divider />
        <Box>
          <Text my={2}>
            I have been learning programming since early 2021, and I quickly
            fell in love with creative problem solving and building ambitious
            websites and apps.
          </Text>
          <Text my={2}>
            My main passion lies in web development, but I am currently
            exploring various types of programming:
          </Text>
          <TechStackItem
            stack={[
              'Employed as a Junior Developer at a real-time collaboration software company.',
              "Studying Software Development at Queen's University Belfast.",
              'In my free time I am studying web development, with a focus on React.',
            ]}
          />
        </Box>

        <Section delay={0.2}>
          <Box my={8}>
            <Heading as={'h2'} my={2} size={'lg'}>
              Tech Stack
            </Heading>
            <SimpleGrid columns={[2, 3]} gap={6}>
              <TechStackItem
                title={'Frontend'}
                stack={[
                  'HTML & CSS',
                  'Javascript (ES6)',
                  'React (with Hooks)',
                  'Redux',
                  'Next.js',
                  'Chakra UI',
                  'Tailwind CSS',
                ]}
              />
              <TechStackItem
                title={'Backend'}
                stack={[
                  'Node.js',
                  'Java',
                  'Express',
                  'MongoDB',
                  'Supabase',
                  'RESTful API',
                ]}
              />
              <TechStackItem
                title={'Others'}
                stack={[
                  'Git',
                  'Linux',
                  'Jest',
                  'Cypress',
                  'GraphQL',
                  'C++ with UE4',
                  'OOP Practices',
                ]}
              />
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Box my={8}>
            <Flex
              justify={'space-between'}
              align={['flex-start', 'center']}
              my={2}
              flexDir={['column', 'row']}
            >
              <Heading as={'h2'} size={'lg'} my={2}>
                Featured Projects
              </Heading>
              <NextLink href={'/projects'} passHref>
                <Link letterSpacing={'wider'} fontWeight={'semibold'}>
                  <Button
                    leftIcon={<ArrowRightIcon color={'green.500'} />}
                    variant={'outline'}
                  >
                    View all projects
                  </Button>
                </Link>
              </NextLink>
            </Flex>
            <Flex flexDir={'column'} gap={5}>
              {devBlogs()}
              {guitarApp()}
            </Flex>
          </Box>
        </Section>

        <Section delay={0.6}>
          <Box my={8}>
            <Flex
              justify={'space-between'}
              align={['flex-start', 'center']}
              my={2}
              flexDir={['column', 'row']}
            >
              <Heading as={'h2'} size={'lg'} my={2}>
                Featured Posts
              </Heading>
              <NextLink href={'/posts'} passHref>
                <Link>
                  <Button
                    leftIcon={<ArrowRightIcon color={'green.500'} />}
                    variant={'outline'}
                  >
                    View all posts
                  </Button>
                </Link>
              </NextLink>
            </Flex>

            <Box>
              {featuredPosts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </Box>
          </Box>
        </Section>
      </Box>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    // I can add to each post featured: true to make it featured and appear on front page.
    props: { featuredPosts: getFeaturedPosts() },
  };
}

//TODO: CHECK PROPER HTML ELEMENTS (SECTION, ARTICLE ETC)

// https://chakra-templates.dev/components/cards
