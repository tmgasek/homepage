import {
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Code,
  OrderedList,
} from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostPage = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Box className="md">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <Heading {...props} />,
            p: ({ node, ...props }) => <Text {...props} />,
            ul: ({ node, ordered = 'false', ...props }) => (
              <UnorderedList {...props} />
            ),
            li: ({ node, ordered = 'false', ...props }) => (
              <ListItem {...props} />
            ),
            ol: ({ node, ordered = 'true', ...props }) => (
              <OrderedList {...props} />
            ),
            code: ({ node, ...props }) => (
              <Code wordBreak={'break-word'} {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(`posts`, slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
