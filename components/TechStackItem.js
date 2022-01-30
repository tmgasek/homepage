import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const TechStackItem = ({ title, stack }) => {
  return (
    <Box>
      <Heading size={'md'} mb={1}>
        {title}
      </Heading>
      <List>
        {stack.map((item) => (
          <ListItem key={item}>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechStackItem;
