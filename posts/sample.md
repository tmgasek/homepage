---
title: 'test'
date: 'May 7, 2021'
excerpt: 'In this review, we will be looking at the new Python book from Oriley'
cover_image: '/images/posts/img6.jpg'
category: 'Python'
author: 'Mike Richards'
author_image: 'https://randomuser.me/api/portraits/men/13.jpg'
---

# Heading 1

## Heading 2

- list element 1
- list element 2
- list element 3

Plain old paragraph text. What would be the main body of the article.

Embedded gist content:

```js
console.log('It works!');
<script src="https://gist.github.com/aaronhanson/5a2a234c2383919629de.js"></script>;
```

```js
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
```
