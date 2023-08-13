import React from 'react'
import { Container, Heading, VStack,Input, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <form>

        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
        <Heading> Welcome Back</Heading>
        <Input placeholder='Email' type='email' required focusBorderColor='pink'/>
        <Input placeholder='Password' type='password' required focusBorderColor='pink'/>
        <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'} > Forget Passwords ?</Link>
        </Button>
        <Button colorScheme='pink' type='submit'> Log in</Button>
        <Text textAlign={'right'}>New User ?  {'  '}
        <Button colorScheme='pink' type='submit' variant={'link'}><Link to='/signup'> Sign up</Link></Button>
       
        </Text>
       
        </VStack>
    </form>

   </Container>
  )
}

export default Login