import NextLink from 'next/link';
import { getFeaturedPosts } from '../lib';
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';
import { Divider, PostCard, TechStackItem, WorkItem } from '../components';
import { ArrowRightIcon } from '@chakra-ui/icons';
import thumbHulu from '../public/hulu_clone.png';
import thumbCalc from '../public/calcusearch.png';

const Home = ({ featuredPosts }) => {
  return (
    <Box>
      <Heading as={'h1'}>I&apos;m Tomasz and I make websites.</Heading>
      <Divider />
      <Box>
        <Text my={2}>
          I have been learning programming since early 2021, and I quickly fell
          in love with creative problem solving and building ambitious websites
          and apps
        </Text>
      </Box>

      <Box my={8}>
        <Heading as={'h2'} my={2}>
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

      <Box my={8}>
        <Flex
          justify={'space-between'}
          align={['flex-start', 'center']}
          my={2}
          flexDir={['column', 'row']}
        >
          <Heading as={'h2'}>Featured Projects</Heading>
          <NextLink href={'/works'}>
            <Link>
              <ArrowRightIcon mx={2} color={'green.500'} />
              View all projects
            </Link>
          </NextLink>
        </Flex>
        <SimpleGrid columns={[1, 2]} gap={4}>
          <WorkItem
            id="hulu_clone"
            title="Hulu clone"
            link={'https://hulu-clone-rho-ten.vercel.app/'}
            thumbnail={thumbHulu}
          ></WorkItem>
          <WorkItem
            id="calcusearch"
            title="Calcu-search"
            link={'https://calcusearch.vercel.app/'}
            thumbnail={thumbCalc}
          ></WorkItem>
        </SimpleGrid>
      </Box>

      <Box my={8}>
        <Flex
          justify={'space-between'}
          align={['flex-start', 'center']}
          my={2}
          flexDir={['column', 'row']}
        >
          <Heading as={'h2'}>Featured Posts</Heading>
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
    </Box>
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
