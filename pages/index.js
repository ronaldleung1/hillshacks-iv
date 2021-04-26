/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  jsx,
  Box,
  Heading,
  Text,
  Button, 
  Image,
  Container
} from 'theme-ui';
import React from 'react';

const Index = (props) => (
  <>
    <Box 
      bg="sunken" 
      sx={{
        width: '100%',
        textAlign: 'center',
        backgroundImage: theme => `radial-gradient(${theme.colors.slate}, ${theme.colors.sunken})`
      }}>
      <Container as="main" py={6} variant="copy" {...props}>
      <Image
        src="/logo.png"
        alt="hillsHacks Logo"
        width={600}
      />
        {/*<Heading variant="ultratitle">
            hillsHacks IV
    </Heading>*/}
        <Heading mt={16} variant="subtitle">There's never been a better time to build. <strong>And the world has never needed it more than now.</strong></Heading>
        <Button as="a" variant="primary" my={2}
  href="https://github.com/lachlanjc/next-theme-starter">Register</Button>
      </Container>
    </Box>
    <Container as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline">This is not your typical hackathon.</Heading>
      <Text as="p" mb={3}><b>hillsHacks was born with a mission:</b> to show the world that computer science is more than memorizing technical jargon and stuffing code into machines. CS is for innovators, creators, problem solvers, artists, and <i>you</i>. And at hillsHacks, we'll show you the ropes .</Text>
      <Text as="p" mb={3}>Rather than leave you alone for 12 hours expecting you to come out with __, we'll guide you through with workshops from Watchung Hills alumni and provide one-on-one mentorship. You'll implement your ideas in our design challenge without code, so you won't have to stress over the details.</Text>
      <Text variant="lead">This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 6 through 12.</Text>
      <br/>
    </Container>
    <Container as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <h2>Why come to hillsHacks?</h2>
<p>Can you spend a day without using some form of technology developed in the last 5 years? It would probably be difficult - technology has completely changed the way we live our lives. Regardless of your experience, you will learn something new at hillsHacks about how computer science is being used all around us - often in things we take for granted! All students grade 6 and up are welcome.</p>

<h2>What if I don’t know anything about coding or computer science?</h2>
<p>No problem. We love beginners! There's a lot to learn at hillsHacks, and we hope you will leave inspired.</p>

<h2>I’m an expert at coding. What do I get out of this event?</h2>
<p>Take a look at some of our advanced workshops like ___!</p>

<h2>This sounds like a long day, will there be food?</h2>
<p>Of course! All participants will be given lunch and dinner. Snacks will also be available throughout the day.</p>

<h2>Do I need to bring my own computer?</h2>
<p>You are welcome to bring own computer. If you forget yours, don't worry, we have Chromebooks for everyone to use!</p>

<h2>Sounds great! Where is it?</h2>
<p>It's at Watchung Hills Regional High School, 108 Stirling Rd, Warren, NJ 07059. You should enter through the main entrance at the front of the school.</p>
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