import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const TechStackItem = ({ title, stack }) => {
  return (
    <Box>
      <Heading size={'md'} mb={1} fontWeight={'light'}>
        {title}
      </Heading>
      <List>
        {stack.map((item) => (
          <ListItem key={item} display={'flex'} alignItems={'flex-start'}>
            <ListIcon as={ChevronRightIcon} mt={1} color="green.500" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechStackItem;
