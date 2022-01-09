import NextLink from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <Box mt={2}>
      <NextLink href={`/posts/${post.slug}`}>
        <Link>
          <Heading isTruncated size={'md'}>
            {post.frontmatter.title}
          </Heading>
        </Link>
      </NextLink>
      <Text>{post.frontmatter.date}</Text>
      <Text isTruncated>{post.frontmatter.excerpt}</Text>
    </Box>
  );
};

export default PostCard;
