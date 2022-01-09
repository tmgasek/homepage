import { Box, Heading } from '@chakra-ui/react';
import { getPosts } from '../../lib';
import { Divider, PostCard } from '../../components';

const Posts = ({ posts }) => {
  return (
    <Box>
      <Heading>Posts</Heading>
      <Divider />
      <Box>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Posts;

export async function getStaticProps() {
  return {
    props: { posts: getPosts() },
  };
}
