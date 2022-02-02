import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkItem, Divider, Layout } from '../../components';

import thumbHulu from '../../public/hulu-clone-preview.png';
import thumbCalc from '../../public/calcusearch.png';
import thumbGuitar from '../../public/guitar-practice-app-preview.png';

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
            title="Guitar Practice App "
            githubLink={'https://github.com/tmgasek/guitar-practice-app'}
            liveLink={'https://guitar-practice-app.vercel.app/'}
            blogLink={'/posts/guitar-app'}
            thumbnail={thumbGuitar}
          />

          <WorkItem
            id="calcusearch"
            title="Calcu-search "
            githubLink={'https://github.com/tmgasek/calcu-search'}
            liveLink={'https://calcusearch.vercel.app/'}
            blogLink={'#'}
            thumbnail={thumbCalc}
          />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Works;
