import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkItem } from '../../components';

import thumbHulu from '../../public/hulu_clone.png';
import thumbCalc from '../../public/calcusearch.png';
import thumbGuitar from '../../public/guitar-practice-app.png';
import Divider from '../../components/Divider';

const Works = () => {
  return (
    <Box>
      <Heading>Works</Heading>
      <Divider />

      <SimpleGrid columns={[1, 2]} gap={5} my={4}>
        <WorkItem
          id="hulu-clone"
          title="Hulu clone"
          githubLink={'#'}
          liveLink={'https://hulu-clone-rho-ten.vercel.app/'}
          blogLink={'#'}
          thumbnail={thumbHulu}
        />
        <WorkItem
          id="calcusearch"
          title="Calcu-search "
          githubLink={'#'}
          liveLink={'https://calcusearch.vercel.app/'}
          blogLink={'#'}
          thumbnail={thumbCalc}
        />
        <WorkItem
          id="guitar-app"
          title="Guitar Practice App "
          githubLink={'#'}
          liveLink={'https://guitar-practice-app.vercel.app/'}
          blogLink={'#'}
          thumbnail={thumbGuitar}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Works;
