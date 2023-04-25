import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function MyJobs() {
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
                    
                    <Button
                        color="white"
                        size={{base:"xs",sm:"sm",md:"md"}}
                        fontSize="sm"
                        bg='red.500'
                        borderRadius='40px'
                        marginLeft={{md:"40%",base:"-25%"}}
                        paddingX='2%'
                        marginTop={{md:'20%',base:"80%"}}
                        transition={"all ease-in-out 100ms"}
                        _hover={{
                            transform: "scale(1.05)",
                            bgColor: 'magenta',
                            color: "white",
                        }}>Unapproved</Button>
                </Box>
            </Flex>
        </Box>

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
                    
                    <Button
                        color="white"
                        size={{base:"xs",sm:"sm",md:"md"}}
                        bg='purple.600'
                        borderRadius='40px'
                        marginLeft={{md:"45%",base:"-15%"}}
                        paddingX='2%'
                        marginTop={{md:'20%',base:"80%"}}
                        transition={"all ease-in-out 100ms"}
                        _hover={{
                            transform: "scale(1.05)",
                            bgColor: 'red.500',
                            color: "white",
                        }}>In Progress</Button>
                </Box>
            </Flex>
        </Box>
        </div>
            
    )
}