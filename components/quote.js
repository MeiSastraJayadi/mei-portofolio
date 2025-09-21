import styled from "@emotion/styled";
import Section from "./section";
import { Box, Heading, Text } from "@chakra-ui/react";

const By = styled.span`
  font-size : 0.9em;
  font-weight: bold;
  margin-left : 10px 
`;

const Quote = () => {
  return (
    <Section>
      <Box
        bg={'purple.500'}
        color={'whiteAlpha.900'}
        mt={10}
        py={3}
        px={8}
        borderRadius={'xl'}
      >
        <Heading as={'h3'} variant={'page-title'} size={'md'}>
          <Text as='i'>
            "In Every Click and Line of Code, There is a Part of Me"
          </Text>
          <By>
            - Mei
          </By>
        </Heading>
      </Box>
    </Section>
  )
}

export default Quote;
