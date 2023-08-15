import React from 'react'
import { Button, Container, HStack, VStack, Input } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
const Upload = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'pink'} h='full' justifyContent={'center'} >
                <AiOutlineCloudUpload size={'10vmax'} />
                <form>
                    <HStack>
                        <Input required type='file'
                            css={{
                                "&::file-selector-button": {
                                    border: 'none',
                                    width: 'calc(100%+36px)',
                                    marginLeft: '-10px',
                                    marginTop: '5px',
                                    color: 'black',
                                    backgroundColor: 'white',
                                    cursor: 'pointer'

                                }
                            }}

                        ></Input>
                        <Button colorScheme='pink' type='submit'> Upload</Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default Upload