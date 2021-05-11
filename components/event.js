import { Card, Heading, Text } from 'theme-ui';

const Event = ({from, to, name, speaker, description}) => {
  return (
    <Card>
      <Text color="muted">{from}-{to}</Text>
      <Heading as="h2" mb={speaker ? 0 : 2} variant="subheadline">{name}</Heading>
      {speaker && <Heading as="h3" mb={2} sx={{fontSize: 2, fontWeight: "normal"}}>{speaker}</Heading>}
      {description && <Text as="p">{description}</Text>}
    </Card>
  )
}

export default Event;
