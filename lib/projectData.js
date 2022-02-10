import { Box, Text } from '@chakra-ui/react';
import { ProjectItem, TechStackItem } from '../components';

import thumbHulu from '../public/hulu-clone-preview.png';
import thumbCalc from '../public/calcusearch.png';
import thumbGuitar from '../public/guitar-practice-app-preview.png';
import thumbDevBlogs from '../public/dev-blogs.png';
import thumbTeacher from '../public/guitar-teacher.png';

export const huluClone = () => (
  <ProjectItem
    id="hulu-clone"
    title="Hulu clone"
    githubLink={'https://github.com/tmgasek/hulu-clone'}
    liveLink={'https://hulu-clone-rho-ten.vercel.app/'}
    blogLink={'/posts/hulu-clone'}
    thumbnail={thumbHulu}
  >
    <Box>
      <TechStackItem
        stack={[
          'React, Next.js, and Tailwind CSS',
          'Data provided by TMDB API',
        ]}
      />
    </Box>
  </ProjectItem>
);

export const guitarApp = () => (
  <ProjectItem
    id="guitar-app"
    title="Guitar Practice App"
    githubLink={'https://github.com/tmgasek/guitar-practice-app'}
    liveLink={'https://guitar-practice-app.vercel.app/'}
    blogLink={'/posts/guitar-app'}
    thumbnail={thumbGuitar}
  >
    <Box>
      <TechStackItem
        stack={[
          'Supabase (PostgreSQL real-time database) used for backend',
          'React, Next.js, and Tailwind CSS used for frontend',
          'The data is fetched client side, with caching using the SWR Hook',
          'Implemented server-side page protection',
        ]}
      />
    </Box>
  </ProjectItem>
);

export const devBlogs = () => (
  <ProjectItem
    id="dev-blogs"
    title="Dev Blogs"
    githubLink={'https://github.com/tmgasek/building-blogs-frontend'}
    liveLink={'https://radiant-fortress-53702.herokuapp.com/'}
    blogLink={'/posts/dev-blogs'}
    thumbnail={thumbDevBlogs}
  >
    <Box>
      <Text>
        (site hosted on Heroku, might take a few seconds longer to load as it
        sleeps after inactivity)
      </Text>
      <TechStackItem
        stack={[
          'Full-stack MERN application',
          'REST backend with Node.js, Express.js, and MongoDB (Mongoose)',
          'Single Page Application frontend with React, Redux, and Chakra UI',
          'Cypress E2E testing system implemented',
        ]}
      />
    </Box>
  </ProjectItem>
);

export const calcuSearch = () => (
  <ProjectItem
    id="calcu-search"
    title="Calcu-search "
    githubLink={'https://github.com/tmgasek/calcu-search'}
    liveLink={'https://calcusearch.vercel.app/'}
    blogLink={'/posts/calcu-search'}
    thumbnail={thumbCalc}
  >
    <Box>
      <TechStackItem
        stack={[
          'React, Next.js, Tailwind CSS',
          'Data fetched from the Wikipedia API, with debounced search functionality',
        ]}
      />
    </Box>
  </ProjectItem>
);

export const guitarTeacher = () => (
  <ProjectItem
    id="guitar-teacher"
    title="Guitar Teaching Business Landing Page "
    githubLink={'https://github.com/tmgasek/guitar-teaching-business'}
    liveLink={'https://priceless-shirley-608181.netlify.app/'}
    blogLink={'/posts/landing-page'}
    thumbnail={thumbTeacher}
  >
    (in progress)
  </ProjectItem>
);
