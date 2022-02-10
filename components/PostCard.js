import NextLink from 'next/link';
import { Box, Heading, Link, Text, useColorMode } from '@chakra-ui/react';

const PostCard = ({ post }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box mt={4}>
      <NextLink href={`/posts/${post.slug}`} passHref>
        <Link>
          <Heading isTruncated fontSize={['md', 'xl']}>
            {post.frontmatter.title}{' '}
          </Heading>
        </Link>
      </NextLink>
      <Text
        fontSize={['xs', 'sm']}
        color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.700'}
      >
        {post.frontmatter.date}
      </Text>
      <Text isTruncated fontSize={['sm', 'md']}>
        {post.frontmatter.excerpt}
      </Text>
    </Box>
  );
};

export default PostCard;
