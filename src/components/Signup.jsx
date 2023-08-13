import React from 'react'
import { Container, Heading, VStack,Input, Button, Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <form>

        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
        <Heading alignSelf={'center'}> Video Library</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        <Input placeholder='Name' type='text' required focusBorderColor='pink'/>
        <Input placeholder='Email' type='email' required focusBorderColor='pink'/>
        <Input placeholder='Password' type='password' required focusBorderColor='pink'/>
       
        <Button colorScheme='pink' type='submit'> Sign up</Button>
        <Text textAlign={'right'}>Already have account ?  {'  '}
        <Button colorScheme='pink' type='submit' variant={'link'}> <Link to={'/login'}>Log in</Link> </Button>
       
        </Text>
       
        </VStack>
    </form>

   </Container>
  )
}

export default Signin