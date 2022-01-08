import NextLink from 'next/link';
import { Box, Heading, Link } from '@chakra-ui/react';

const PostCard = ({ post }) => {
  return (
    <Box>
      <NextLink href={`/posts/${post.slug}`}>
        <Link>
          <Heading>{post.frontmatter.title}</Heading>
        </Link>
      </NextLink>
    </Box>
  );
};

export default PostCard;
