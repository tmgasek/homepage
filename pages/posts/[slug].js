/* eslint-disable react/no-children-prop */
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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

//  code: ({ node, ...props }) => (
//               <Code wordBreak={'break-word'} {...props} />
//             ),

//https://www.google.com/search?q=css+hide+scroll+bar&rlz=1C1CHBF_en-GBGB805GB805&oq=css+hide+scroll+ba&aqs=chrome.0.69i59j69i57j69i60.3073j0j7&sourceid=chrome&ie=UTF-8

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

            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={nightOwl}
                  language={match[1]}
                  PreTag="div"
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
