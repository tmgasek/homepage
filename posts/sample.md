---
title: 'test'
date: '7 May, 2021'
excerpt: 'In this review, we will be looking at the new Python book from Oriley'
cover_image: '/images/posts/img6.jpg'
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

This is the first line.  
And this is the second line.

```js
const { data: routines, error } = useSWR('/api/getRoutines', fetcher);
```

Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

I really like using Markdown.

I think I'll use it to format all of my documents from now on

Italicized text is the _cat's meow_.

> Dorothy followed her through many of the beautiful rooms in her castle.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item

- First item
- Second item
- Third item
- Fourth item

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

At the command prompt, type `nano`.

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

<https://www.markdownguide.org>
<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the _[Markdown Guide](https://www.markdownguide.org)_.
See the section on [`code`](#code).

ellomolestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribu

rum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribu  
ok

![image info](/original.jpg)
