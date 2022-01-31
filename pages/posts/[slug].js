/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import {
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  Link,
} from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Divider from '../../components/Divider';

const PostPage = ({ frontmatter: { title, category, date }, content }) => {
  return (
    <Box style={{ scrollbarWidth: 'none!' }}>
      <Heading>{title}</Heading>
      <Divider />
      <Text>{date}</Text>
      <Box className="md">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <Heading as={'h1'} {...props} />,
            h2: ({ node, ...props }) => <Heading as={'h2'} {...props} />,
            h3: ({ node, ...props }) => <Heading as={'h3'} {...props} />,
            h4: ({ node, ...props }) => <Heading as={'h4'} {...props} />,
            div: ({ node, ...props }) => <Box {...props} />,
            p: ({ node, ...props }) => <Text py={1} {...props} />,
            ul: ({ node, ordered = 'false', ...props }) => (
              <UnorderedList {...props} />
            ),
            ol: ({ node, ordered = 'true', ...props }) => (
              <OrderedList {...props} />
            ),
            li: ({ node, ordered = 'false', ...props }) => (
              <ListItem {...props} />
            ),
            a: ({ node, ...props }) => <Link {...props} />,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={atelierLakesideDark}
                  language={match[1]}
                  PreTag="code"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
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
