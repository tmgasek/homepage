import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Divider, Layout } from '../../components';

import {
  guitarApp,
  calcuSearch,
  devBlogs,
  guitarTeacher,
  huluClone,
} from '../../lib/projectData';

const Projects = () => {
  return (
    <Layout title={'Tomasz Gasek - Projects'}>
      <Box>
        <Heading>Projects</Heading>
        <Divider />

        <SimpleGrid columns={[1]} gap={5} my={4}>
          {devBlogs()}
          {guitarApp()}
          {calcuSearch()}
          {huluClone()}
          {guitarTeacher()}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Projects;
