<<<<<<< HEAD
import { Box, Container, Heading } from '@chakra-ui/react';
import Section from '../components/Section';
=======
import NextLink from 'next/link';
import { Box, Text, Heading, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import { getFeaturedPosts } from '../lib';
>>>>>>> a7a5b95 (rebasing)

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <Box>
      <Heading as={'h1'}>I&apos;m Tomasz and I make websites.</Heading>

      <Box>
        <Text my={2} fontSize={'md'}>
          I have been learning programming since early 2021, and I quickly fell
          in love with creative problem solving and building ambitious websites
          and apps.
        </Text>
      </Box>

<<<<<<< HEAD
      <Section delay={0.1}>
        hellomolestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperior
      </Section>
=======
      <Box my={8}></Box>
>>>>>>> a7a5b95 (rebasing)
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: { posts: getFeaturedPosts() },
  };
}

//TODO: CHECK PROPER HTML ELEMENTS (SECTION, ARTICLE ETC)

// https://chakra-templates.dev/components/cards

// <SimpleGrid columns={[1, 3]} gap={8}>
//   {posts.map((p) => (
//     <Box
//       key={p.slug}
//       rounded={'2xl'}
//       border={'2px'}
//       bgGradient="linear(to-l, #7928CA, #FF0080)"
//       p={4}
//       h={'3xs'}
//     >
//       <Text>{p.frontmatter.title}</Text>
//     </Box>
//   ))}
// </SimpleGrid>;
