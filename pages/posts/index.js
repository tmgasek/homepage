import { Box, Heading } from '@chakra-ui/react';
import { getPosts } from '../../lib';
import PostCard from '../../components/PostCard';

const Posts = ({ posts }) => {
  return (
    <Box>
      <Heading>Posts</Heading>
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
