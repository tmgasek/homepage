import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  nightOwl,
  atomOneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { Divider, Layout } from '../../components';

const PostPage = ({ frontmatter: { title, category, date }, content }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout title={`Tomasz Gasek - ${title}`}>
      <Box style={{ scrollbarWidth: 'none!' }}>
        <Heading size={'2xl'} my={4}>
          {title}
        </Heading>
        <Divider />
        <Text>{date}</Text>
        <Box className="md">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <Box>
                  <Heading as={'h1'} size={'xl'} mt={4} mb={2} {...props} />
                  <Divider />
                </Box>
              ),
              h2: ({ node, ...props }) => (
                <Heading
                  as={'h2'}
                  fontSize={['xl', null, '2xl']}
                  mt={4}
                  mb={2}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <Heading as={'h3'} fontSize={'xl'} mt={4} mb={2} {...props} />
              ),
              div: ({ node, ...props }) => <Box my={4} {...props} />,
              p: ({ node, ...props }) => <Text my={2} {...props} />,
              ul: ({ node, ordered = 'false', ...props }) => (
                <UnorderedList {...props} />
              ),
              ol: ({ node, ordered = 'true', ...props }) => (
                <OrderedList {...props} />
              ),
              li: ({ node, ordered = 'false', ...props }) => (
                <ListItem my={1} {...props} />
              ),
              a: ({ node, ...props }) => (
                <Link color={'Highlight'} {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');

                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={colorMode === 'light' ? nightOwl : atomOneDark}
                    //this converts 'js' to 'avascript' from match[] as 'js' does not seem to highlight correctly
                    language={match[1] === 'js' ? 'javascript' : match[1]}
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
    </Layout>
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
