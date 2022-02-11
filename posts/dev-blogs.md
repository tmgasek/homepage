---
title: 'MERN Stack Project - [dev-blogs]'
date: '2 Feb, 2022'
excerpt: 'MongoDB, React, Redux: one of my first projects!'
featured: true
---

![preview](/dev-blogs.png)

I worked on this application during a period of a few months, as it was part of the [fullstackopen](https://fullstackopen.com/en/) course from the University of Helsinki. This was an invaluable resource from which I learned the majority of my foundational frontend and backend knowledge. The course explains and teaches you the concepts, then assigns you a series of challenges where you implement your own code solutions to problems. The culmination of those challenges is a Blog posting website, which I have in turn expanded on further in order to create dev-blogs.

## Technologies used

- Node.js, Express.js, MongoDB, Mongoose, jwtoken, bcrypt
- React, Redux, Chakra UI, Cypress

# Challenges

## Updating dependencies

Seeing as I originally worked on my fullstackopen submissions back in summer time, there have been over 7 months of updates to the various packages that I used as I came back to expand on the application in December.
Most notably, react-router-dom went from version 5.3.0 -> 6.2.1. Version 6 brought around some breaking changes, but the developers brought out a very useful upgrading guide which I followed - <https://reactrouter.com/docs/en/v6/upgrading/v5>

After switching my <Switch> to <Routes>, refactoring the <Route> elements, and replacing useHistory with useNavigate, I was left with a rather unpleasant <Route> element which looked like this:

```js
<Route
  path="/"
  element={
    currUser === null ? (
      <>
        <LoginForm />
        <SignupForm />
      </>
    ) : (
      <div>
        <p>{currUser.name} logged in</p>
        <button id="logOutBtn" onClick={logOut}>
          log out
        </button>
        <BlogForm />
        <Blogs />
      </div>
    )
  }
/>
```

This was functional, but it begged a refactor to a single component page which contained the conditional rendering based on user login status inside it.

## Slugifying endpoints

Next I wanted to not have lengthy URLs based on the id of the blog, which did not look pleasing to the eye.

now instead of this

http://localhost:3000/blogs/61e70563e24dfe25eae817b4

we have

http://localhost:3000/blogs/this-is-a-blog-post

I have used this blog to help me find a suitable plugin for mongoose
<https://medium.com/fbdevclagos/how-to-create-unique-urls-in-an-expressjs-and-mongodb-app-78865802902e>

I then visited the documentation of the plugin at
<https://www.npmjs.com/package/mongoose-slug-generator>
in order to find how to make sure the slugs were unique. I simply had to add unique: true to the end of the slug definition, which adds a random string to the slug if there's a duplicate. This seems like a better solution than making sure that blog post names themselves are unique.

There was an issue with tests returning an error
"MongoBulkWriteError: E11000 duplicate key error collection: test.blogs index: slug_1 dup key: { slug: null }"
This was solved by adding the slug field to helper initial blogs and dropping the test collection in mongo atlas.

A problem I came upon once a blog was updated, was that given the fact that the slug was generated only on creation of a new blog and based off the title, once the title was edited by the user, the slug was based on the old title which didn't make sense.
I decided to instead use the popular package named slugify and use that for my backend instead on the mongoose plugin.

A new problem arose when I was testing my application in production mode. I refreshed the page while i was on the page of a single blog, and instead of the page reloading on the same page, it threw an unknown route error which I recognised from the unknown route handler middleware in my backend.
I immediately thought that this was a problem with my slug implementation, as maybe the slug wasn't being resolved properly by the server. I went back to previous commits and after deployment and testing the build on just my backend, I was shocked to see that the problem still occured. I clearly hadn't previously tried refreshing a page when testing, so I wasn't aware of this problem.
It turned out that this was my lack of consideration of how the urls and endpoints worked on Server-side vs on the client-side. I knew that on a single-page-app like this, it all works on one HTML page, and then JS is used to render different views to give the illusion that you're "going" to different pages. However, if your current URL is for instance say app.com/blogs/61e8908e32794b661f993c08, and you got there by clicking react-router links from the homepage, then on reloading the page a request will be sent to the server with that URL. If none of the routes in backend are configured to match, then you'll get a 404. In my case I had an unknown endpoint handler that automatically returned an error on every unhandled request.
As soon as I removed it, and implemented a catch-all handler that points to the index.html, everything worked again.

```js
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
```

This post on stack overflow explained exactly what was happening
<https://stackoverflow.com/a/36623117>
<https://ui.dev/react-router-cannot-get-url-refresh/>
