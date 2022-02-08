---
title: 'Creating a Hulu clone website'
date: '31 Dec, 2021'
excerpt: 'Description of my process of developing a website inspired by Hulu.'
---

![preview](/hulu-clone-preview.png)

My aim for this project was to create a website where the user can view and search for movies and TV shows. The data is provided by [The Movie Database](https://www.themoviedb.org/) with version 3 of their database being used.

The website has 2 parts:

1. The welcoming [Home](https://hulu-clone-rho-ten.vercel.app/home) page, which is a direct visual clone of Hulu's official [Welcome](https://www.hulu.com/welcome) site which I used as a visual reference and made my own rendition of it using Tailwind CSS.
2. The media viewing part of the site which queries TheMovieDB. I followed a guide to create a functioning skeleton of the app which queries movies. Then I expanded the app with a search function, TV Shows and detail views for single movies and shows.

The data is all fetched using getServerSideProps from Next.js, meaning that it's pre-rendered on each request and the fetching only runs on server side. Static Site Generation for this kind of app did not seem an appropriate solution as there are thousands of potential endpoints which constantly change. Client Side Generation could've been an option, but with Server Side Generation I saw better performance and quicker loading sites, with an overall smoother browsing experience.

## Technologies used

- React
- Next.js
- Tailwind CSS
