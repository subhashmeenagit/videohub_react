import { Box, Container, Heading, Image, Stack,Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import pic1 from '../assets/pic1.jpg'
//import pic2 from '../assets/pic2.jpg'
//import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'

const Home = () => {
  return (<Box>  
<Mycarosel/>

<Container maxWidth={'Container.xl'} minH={'100vh'} p={16}>
    <Heading  py={'2'}
      w={'fit-content'}
      borderBottom={'2px solid'}
      m={'auto'}
    
    >
        Services
    </Heading>

    <Stack
    h={'full'}
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}
    
    >

        <Image src={pic1}  h={['40','400']}  filter={'hue-rotate(130deg)'}/>
        <Text 
        letterSpacing={'widest'}
        lineHeight={'190%'}
        p={['4','16']}
        textAlign={'center'}
        
        >here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </Text>

    </Stack>
</Container>
  </Box>
  )
}
const headingop={
    pos:"absolute",
    left:'50%',
    top:"50%",
    transform:"translate(-50%,-50%",
    textTransform:"uppercase",
    p:'4',
    size:'4 xl'

}
const Mycarosel =()=>(
    
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'25rem'} >
          <Image src={pic4} 
           h={'25rem'}/>
          <Heading bg={'blackAlpha.900'} color={'white'} {...headingop} > don</Heading>
        </Box>
        <Box w={'full'} h={'25rem'}>
          <Image src={pic4} 
          h={'25rem'}/>
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingop}> Subhash</Heading>
        </Box>
    </Carousel>
)

export default Home