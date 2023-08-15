import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>

            <Button
                pos={'fixed'}
                top={4}
                left={4}
                p={0}
                w={'10'}
                h={'10'}
                zIndex={'overlay'}
                borderRadius={'full'}
                colorScheme='pink'
                onClick={onOpen}
            >
                <BiMenuAltLeft size={20} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Videos</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button colorScheme='pink' variant={'ghost'} onClick={onClose}>
                                <Link to='./'  >Home</Link>
                            </Button>
                            <Button colorScheme='pink' variant={'ghost'} onClick={onClose}>
                                <Link to='./videos'  >Videos</Link>
                            </Button>
                            <Button colorScheme='pink' variant={'ghost'} onClick={onClose}>
                                <Link to='./videos?category=free'  >Free Videos</Link>
                            </Button>
                            <Button colorScheme='pink' variant={'ghost'} onClick={onClose}>
                                <Link to='./upload'  >Upload</Link>
                            </Button>
                        </VStack>
                        <HStack pos={'absolute'}
                            bottom={10}
                            left={0}
                            w={'full'}
                            justifyContent={'space-evenly'}

                        >
                            <Button colorScheme='pink' onClick={onClose}>
                                <Link to='./login'> Log In</Link>
                            </Button>
                            <Button colorScheme='pink' variant={'outline'} onClick={onClose}>
                                <Link to='./signup'> Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header