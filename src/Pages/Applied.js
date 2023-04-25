import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Applied() {
    return (
        <div>
            

            <Box h="150px" w={{ base: '100%', md: '80%' }} bgGradient='linear(to-r, whiteAlpha.900 , blackAlpha.800)' mt='2%'  p='1%' borderRadius={10} >
            <Flex justifyContent='space-between'>
                <Box w="15%" size={{base:"xs",md:"md"}} >
                    <Image src='https://www.cloudcomputing-news.net/wp-content/uploads/sites/2/2022/02/vmware-logo.png' alt='vmware logo' boxSize='100%'
                     />
                </Box>

                <Box w='65%' pl="2%">
                    <Heading size="md">Marketing Manager</Heading><br/>
                    <Text>Pipal Tree Ventures Private Ltd. <br /> Mumbai,India(On-site)</Text>

                </Box>

                <Box w='20%'>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ031zvP5g0uleoTUG91zQz_yqmOHcqdsVmtQ&usqp=CAU' 
                    alt='green tick image' boxSize='25px' ml='60%' borderRadius='full' marginTop={2} size={{base:"xs",md:"sm"}}/>
                    <Button
                        color="white"
                        size={{base:"xs",sm:"sm",md:"md"}}
                        
                        bg='limegreen'
                        borderRadius='40px'
                        marginLeft={{md:"35%",base:"20%"}}
                        paddingX='2%'
                        marginTop={{md:'25%',base:"80%"}}
                        transition={"all ease-in-out 100ms"}
                        _hover={{
                            transform: "scale(1.05)",
                            bgColor: 'Limegreen',
                            color: "white",
                        }}>Active</Button>
                </Box>
            </Flex>
        </Box>

        <Box h="150px" w={{ base: '100%', md: '80%' }}  mt='2%' bgGradient='linear(to-r, whiteAlpha.900 , blackAlpha.800)' p='1%' borderRadius={10}>
            <Flex justifyContent='space-between'>
                <Box w="15%" size={{base:"xs",sm:"sm",md:"md"}}>
                    <Image src='https://www.cloudcomputing-news.net/wp-content/uploads/sites/2/2022/02/vmware-logo.png' alt='vmware logo' boxSize='100%'
                     />
                </Box>

                <Box w='65%' pl="2%">
                    <Heading size="md">Marketing Manager</Heading><br/>
                    <Text>Pipal Tree Ventures Private Ltd. <br /> Mumbai,India(On-site)</Text>

                </Box>

                <Box w='20%'>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ031zvP5g0uleoTUG91zQz_yqmOHcqdsVmtQ&usqp=CAU' 
                    alt='green tick image' boxSize='25px' ml='60%' borderRadius='full' marginTop={2} size={{base:"xs",md:"sm"}}/>
                    <Button
                        color="white"
                        size={{base:"xs",sm:"sm",md:"md"}}
                        
                        bg='orange'
                        borderRadius='40px'
                        marginLeft={{md:"28%",base:"2%"}}
                        paddingX='2%'
                        marginTop={{md:'25%',base:"80%"}}
                        transition={"all ease-in-out 100ms"}
                        _hover={{
                            transform: "scale(1.05)",
                            bgColor: 'Orange',
                            color: "white",
                        }}>In Active</Button>
                </Box>
            </Flex>
        </Box>
        

        
        </div>
        
    )
}
