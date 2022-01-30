import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkItem } from '../../components';

import thumbHulu from '../../public/hulu_clone.png';
import thumbCalc from '../../public/calcusearch.png';
import Divider from '../../components/Divider';

const Works = () => {
  return (
    <Box>
      <Heading>Works</Heading>
      <Divider />

      <SimpleGrid columns={[1, 2]} spacing={10} my={4}>
        <WorkItem
          id="hulu_clone"
          title="Hulu clone"
          link={'https://hulu-clone-rho-ten.vercel.app/'}
          thumbnail={thumbHulu}
        >
          A clone of the hulu site
        </WorkItem>
        <WorkItem
          id="calcusearch"
          title="Calcu-search"
          link={'https://calcusearch.vercel.app/'}
          thumbnail={thumbCalc}
        >
          calculator with wikipedia facts based on numbers
        </WorkItem>
      </SimpleGrid>
    </Box>
  );
};

export default Works;
