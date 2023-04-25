import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Saved() {
    return (
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
                    <Image src='https://static.thenounproject.com/png/3870055-200.png'
                    alt='Saved Icon' boxSize='35px' ml='60%' borderRadius='full' marginLeft={{md:"45%",base:"50%"}} marginTop={2} size={{base:"xs",md:"sm"}}/>
                    <Button
                        color="white"
                        size={{base:"xs",sm:"sm",md:"md"}}
                        bg='Black'
                        borderRadius='40px'
                        marginLeft={{md:"15%",base:"-12%"}}
                        paddingX='2%'
                        marginTop={{md:'20%',base:"80%"}}
                        transition={"all ease-in-out 100ms"}
                        _hover={{
                            transform: "scale(1.05)",
                            bgColor: 'Black',
                            color: "white",
                        }}>Easy Apply</Button>
                </Box>
            </Flex>
        </Box>

        
    )
}
