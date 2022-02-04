import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkItem, Divider, Layout } from '../../components';

import thumbHulu from '../../public/hulu-clone-preview.png';
import thumbCalc from '../../public/calcusearch.png';
import thumbGuitar from '../../public/guitar-practice-app-preview.png';
import thumbDevBlogs from '../../public/dev-blogs.png';
import thumbTeacher from '../../public/guitar-teacher.png';

const Works = () => {
  return (
    <Layout title={'Tomasz Gasek - Works'}>
      <Box>
        <Heading>Works</Heading>
        <Divider />

        <SimpleGrid columns={[1]} gap={5} my={4}>
          <WorkItem
            id="hulu-clone"
            title="Hulu clone"
            githubLink={'https://github.com/tmgasek/hulu-clone'}
            liveLink={'https://hulu-clone-rho-ten.vercel.app/'}
            blogLink={'/posts/hulu-clone'}
            thumbnail={thumbHulu}
          />
          <WorkItem
            id="guitar-app"
            title="Guitar Practice App"
            githubLink={'https://github.com/tmgasek/guitar-practice-app'}
            liveLink={'https://guitar-practice-app.vercel.app/'}
            blogLink={'/posts/guitar-app'}
            thumbnail={thumbGuitar}
          />
          <WorkItem
            id="dev-blogs"
            title="Dev Blogs"
            githubLink={'https://github.com/tmgasek/building-blogs-frontend'}
            liveLink={'https://radiant-fortress-53702.herokuapp.com/'}
            blogLink={'/posts/dev-blogs'}
            thumbnail={thumbDevBlogs}
          >
            (site hosted on Heroku, might take a few seconds longer to load as
            it sleeps after inactivity)
          </WorkItem>
          <WorkItem
            id="calcusearch"
            title="Calcu-search "
            githubLink={'https://github.com/tmgasek/calcu-search'}
            liveLink={'https://calcusearch.vercel.app/'}
            blogLink={'/posts/calcu-search'}
            thumbnail={thumbCalc}
          />
          <WorkItem
            id="guitar-teacher"
            title="Guitar Teaching Business Landing Page "
            githubLink={'https://github.com/tmgasek/guitar-teaching-business'}
            liveLink={'https://priceless-shirley-608181.netlify.app/'}
            blogLink={'/posts/landing-page'}
            thumbnail={thumbTeacher}
          >
            (in progress)
          </WorkItem>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Works;
