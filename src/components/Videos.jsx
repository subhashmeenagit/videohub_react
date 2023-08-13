import React, { useState } from 'react'
import{ Heading, Stack, VStack ,Text, Button} from '@chakra-ui/react'
import L1 from '../assets/L3.mp4';
import L2 from '../assets/L2.mp4';
import L3 from '../assets/L1.3gp';
const videosarr=[L1,L2,L3]


const Videos = () => {

    const [videosrc,setvideosrc]=useState(videosarr[0]);
  return (
    <Stack direction={['column','row']} h={'100vh'}>
   <VStack w={'full'}>
<video src={videosrc} 
controls
controlsList='nodownload'
style={{width:'100%'}}
>

</video>
<VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
    <Heading>
    this is a video
    </Heading>
    <Text> about somthing of video</Text>
</VStack>

   </VStack>

   <VStack  w={['full','xl']}
   alignItems={'stretch'}
   p={'8'}
   spacing={'8'}
   overflow={'auto'}
   >
  {videosarr.map((item,index)=>{
         <Button variant={'ghost'} colorScheme='pink'> Lec {index}  
         onClick={()=>{
            setvideosrc(item);
         }}
         </Button>
  })}
   </VStack>
    </Stack>
  )
}

export default Videos