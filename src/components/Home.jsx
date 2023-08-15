import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import pic3 from '../assets/pic3.jpg'
import pic1 from '../assets/pic1.jpg'
//import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'

const Home = () => {
  return (<Box>
    <Mycarosel />

    <Container maxWidth={'Container.xl'} minH={'100vh'} p={16}>
      <Heading py={'2'}
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
        direction={['column', 'row']}

      >

        <Image src={pic1} h={['40', '400']} filter={'hue-rotate(130deg)'} borderRadius={'5px'} />
        <Text
          letterSpacing={'widest'}
          lineHeight={'190%'}
          p={['4', '16']}
          textAlign={'center'}

        >Since 2014 Techsolution delivers IT solutions all over Chile, such as IT outsourcing, structured cabling, Electrical projects, CCTV and others, offering high quality standards in all our different area services to our clients, covering any place in the country. Techsolution is a company focused on deliver the best service to their clients, competitive, dynamic with broad future repercussions whose mission is to do easy and natural the IT management, offering integral and interdisciplinary services to our clients. </Text>

      </Stack>
    </Container>
  </Box>
  )
}
const headingop = {
  pos: "absolute",
  left: '50%',
  top: "50%",
  transform: "translate(-50%,-50%",
  textTransform: "uppercase",
  p: '4',
  size: '4 xl'

}
const Mycarosel = () => (

  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
    <Box w={'full'} h={'100vh'}>
      <Image src={pic4}
        h={'100vh'} filter={'hue-rotate(-130deg)'} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingop}> Web Development</Heading>
    </Box>
    <Box w={'full'} h={'100vh'} >
      <Image src={pic3}
        h={'100vh'} filter={'hue-rotate(-130deg)'} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingop} > Life Lesson</Heading>
    </Box>

  </Carousel>
)

export default Home