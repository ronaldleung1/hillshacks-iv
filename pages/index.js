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
    <Box bg="sunken" sx={{width: '100%'}} sx={{textAlign: 'center'}}>
      <Container as="main" py={4} variant="copy" {...props}>
        <Heading variant="ultratitle">
            hillsHacks IV
        </Heading>
        <Heading mt={16} variant="subtitle">There's never been a better time to build. <strong>And the world has never needed it more than now.</strong></Heading>
        <Button as="a" my={2}
  href="https://github.com/lachlanjc/next-theme-starter">Register</Button>
      </Container>
    </Box>
    <Container as="main" py={4} variant="copy" {...props}>
      <Heading variant="headline">This is not your typical hackathon.</Heading>
      <Text as="p" mb={3}><b>hillsHacks was born with a mission:</b> to show the world that computer science is more than memorizing technical jargon and stuffing code into machines. CS is for innovators, creators, problem solvers, artists, and YOU. And at hillsHacks, we'll show you the ropes .</Text>
      <Text as="p" mb={3}>Rather than leave you alone for 12 hours expecting you to come out with __, we'll guide you through with workshops from Watchung Hills alumni, and implement your ideas in our design challenge without code, so you won't have to stress over the details.</Text>
      <Text variant="lead">This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 6 through 12.</Text>
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