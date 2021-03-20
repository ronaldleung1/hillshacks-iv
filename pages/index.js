/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  jsx,
  Box,
  Heading,
  Text,
  Button, 
  Container
} from 'theme-ui'
import React from 'react';

const Index = (props) => (
  <>
    <Box bg="sunken" sx={{width: '100%'}}>
      <Container as="main" py={4} variant="copy" {...props}>
        <Heading variant="ultratitle">
            hillsHacks IV
        </Heading>
        <Heading mt={16} variant="subtitle">There's never been a better time to build. <strong>And the world has never needed it more than now.</strong></Heading>
        <Button as="a" my={4}
  href="https://github.com/lachlanjc/next-theme-starter">Register</Button>
      </Container>
    </Box>
    <Container as="main" py={4} variant="copy" {...props}>

      <Text variant="lead">This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 7 through 12.</Text>
      <br/>
    </Container>
  </>
)

export default Index;

/*export default props => <Container as="main" py={4} variant="copy" {...props} />

# hillsHacks IV

There's never been a better time to build. And the world has never needed it more than now.

This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 7 through 12.

[@lachlanjc/next-theme-starter](https://github.com/lachlanjc/next-theme-starter)

<Button as="a"
href="https://github.com/lachlanjc/next-theme-starter">GitHub</Button>*/