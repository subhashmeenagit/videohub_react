import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {
    return (
        <Box
            bg={'blackAlpha.900'}
            w={'100%'}
            minH={'30'}
            p={'16'}
            color={'white'}
        >

            <Stack direction={['column', 'row']} w={'full'}>
                <VStack alignContent={'stretch'} w={'full'} px={'4'} marginTop={'10px'}>
                    <Heading
                        size={'md'}
                        textTransform={'uppercase'}
                    >
                        subscribe to more updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'} py={'2'}>
                        <Button
                            p={'0'}
                            colorScheme='pink'
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}

                        >
                            <Input placeholder='Enter Email' border={'none'
                            }

                                borderRadius={'none'}
                                outline={'none'}
                                focusBorderColor='none' />
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack >
                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >

                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        Videos
                    </Heading>
                    <Text> @All Rights Reserved. </Text>
                </VStack>
                <VStack w={'full'}

                    borderRight={['none', '1px solid white']}
                >

                    <Heading size={'md'} textTransform={'uppercase'}> social media</Heading>
                    <Button variant={'link'} colorScheme='red'>
                        <AiFillYoutube />
                        <a href='https://youtube.com/'> Youtube</a>
                    </Button>
                    <Button variant={'link'} colorScheme='pink'>
                        <AiFillInstagram />
                        <a href='https://accounts.google.com/b/0/AddMailService'> Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme='blue'>
                        <AiFillLinkedin />
                        <a href='https://www.linkedin.com/in/subhashscm/'> Linkedin</a>
                    </Button>

                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer