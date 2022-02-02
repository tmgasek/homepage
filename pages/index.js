import NextLink from 'next/link';
import { getFeaturedPosts } from '../lib';
import { Box, Text, Heading, Flex, SimpleGrid, Link } from '@chakra-ui/react';
import {
  Divider,
  Layout,
  PostCard,
  Section,
  TechStackItem,
  WorkItem,
} from '../components';
import { ArrowRightIcon } from '@chakra-ui/icons';
import thumbHulu from '../public/hulu_clone.png';
import thumbGuitar from '../public/guitar-practice-app.png';

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
              "Learning Java and OOP practices as a Software Development student at Queen's University Belfast.",
              'Currently employed part-time as an Unreal Engine 4 / C++ developer in a new game development startup studio.',
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
                stack={['Jest', 'GraphQL', 'C++ with UE4', 'OOP Practices']}
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
              <NextLink href={'/works'}>
                <Link>
                  <ArrowRightIcon mx={2} color={'green.500'} />
                  View all projects
                </Link>
              </NextLink>
            </Flex>
            <SimpleGrid columns={[1, 2]} gap={4}>
              <WorkItem
                id="hulu-clone"
                title="Hulu clone"
                githubLink={'https://github.com/tmgasek/hulu-clone'}
                liveLink={'https://hulu-clone-rho-ten.vercel.app/'}
                blogLink={'/posts/hulu-clone'}
                thumbnail={thumbHulu}
              />
              <WorkItem
                id="guitar-app"
                title="Guitar Practice App "
                githubLink={'https://github.com/tmgasek/guitar-practice-app'}
                liveLink={'https://guitar-practice-app.vercel.app/'}
                blogLink={'/posts/guitar-app'}
                thumbnail={thumbGuitar}
              />
            </SimpleGrid>
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
              <NextLink href={'/posts'}>
                <Link>
                  <ArrowRightIcon mx={2} color={'green.500'} />
                  View all posts
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
