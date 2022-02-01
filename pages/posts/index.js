import { Box, Heading } from '@chakra-ui/react';
import { getPosts } from '../../lib';
import { PostCard, Divider, Layout } from '../../components';

const Posts = ({ posts }) => {
  return (
    <Layout title={'Tomasz Gasek - Posts'}>
      <Box>
        <Heading>Posts</Heading>
        <Divider />

        <Box>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Posts;

export async function getStaticProps() {
  return {
    props: { posts: getPosts() },
  };
}
