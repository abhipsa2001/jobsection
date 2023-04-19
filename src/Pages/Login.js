import React, {useState } from 'react';
import { Box, Heading, VStack, Text, FormControl, FormLabel, Input, HStack, Checkbox, Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [save, setSave] = useState("");
    const toast = useToast()

    const handleemail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlepass = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    const handlesave = () => {
        if(email===""&&password!==""){
            toast({
                title: 'No email provided',
                status: 'warning',
                duration: 3000,
                isClosable: true,
       
              })
        }else if(email!==""&&password===""){
            toast({
                title: 'No password provided',
                status: 'warning',
                duration: 3000,
                isClosable: true,
       
              })
        }else if(email===""&&password===""){
            toast({
                title: 'No ceredentials provided',
                status: 'error',
                duration: 3000,
                isClosable: true,
       
              })
        }else{
            toast({
                title: 'You are logged in.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
       
              })
        }
    }
   

    return (
        
        <Box 
        w={['full', 'md']}
        p={[8,10]}
        mt={[20,'10vh']}
        mx='auto'
        border={['none','1px']}
        borderColor={['','gray.300']}
        borderRadius={10}
        bgGradient='linear(to-r, blue.200 , yellow.400, pink.200)'
    >
        <VStack spacing={8} align='flex-start' w='full'>
            <VStack spacing={1} align={['flex-end','center']} w='full'>
                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
                         bgClip='text'
                         fontWeight='extrabold'
                         fontSize={{ base: '24px', md: '40px', lg: '56px' }} 
                        >
                LOGIN
                </Heading>
                <Text>Enter your E-mail Id and Password to login</Text>
            </VStack>

            <FormControl isRequired >
                <FormLabel>E-Mail Address</FormLabel>
                <Input rounded='none' variant='filled' onChange={handleemail} autoComplete='off'/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input rounded='none' variant='filled' type='password'onChange={handlepass} autoComplete='off'/>
            </FormControl>

            <HStack w='full' justify='space-between'>
                <Checkbox defaultChecked>Remember Me</Checkbox>
                <Button variant='link' colorScheme="blue">Forgot Password??</Button>
            </HStack>
            <Button rounded='2xl' width='full' colorScheme="blue" alignSelf='center'
            onClick={handlesave}>
                Login
            </Button>
        </VStack>
    </Box>
    );
    
}