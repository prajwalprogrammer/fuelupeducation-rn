import * as React from 'react'
import { Text, Box } from '../../Theme'

// import { Container } from './styles';

const GetStarted: React.FC = () => {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant='slogan'> Get started now</Text>
    </Box>
  )
}

export default GetStarted
