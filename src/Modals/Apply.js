import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  Stack,
  Text,
  Select,
  CircularProgress, Box,Flex,IconButton
} from '@chakra-ui/react';
import { AiOutlineCloseCircle } from "react-icons/ai"

export default function Apply() {

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [resume, setResume] = useState(null);
  const [fileName,setFileName]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handletitle = (e) => {
    setTitle(e.target.value)
    console.log(title)
  }
  const handleemail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handlenum = (e) => {
    setNum(e.target.value)
    console.log(num)
  }
  const handleload = (e) => {
    setIsLoading(true)
    const file = e.target.files[0];
    setFileName(e.target.files[0].name)
   // console.log(file);
    const newFile = { file };
    setResume(newFile)
    console.log(fileName);
    setIsLoading(false)
  }
  const handleCancelClick = () => {
    setResume(null);
    setFileName("")
};

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal size="4xl" isOpen={isOpen} onClose={onClose} borderWidth={10}  >
        <ModalOverlay />
        <ModalContent
          bgGradient='linear(to-r, whiteAlpha.400 , blackAlpha.300)'
        >
          <ModalHeader alignSelf='center' fontWeight='bold' >Applying for Marketing Manager</ModalHeader>
          <ModalCloseButton />


          <ModalBody borderTopWidth={2} borderColor='blackAlpha.900'>

            <FormControl >
              <FormLabel fontWeight='bold' fontSize='large'>Contact Info</FormLabel>
            </FormControl>

            <Stack direction='row'>
              <Avatar src='https://bit.ly/broken-link' /><Text paddingTop={3} fontWeight='extrabold'>Priyanshu Priyaranjan Baral</Text>
            </Stack>

            <FormControl>
              <FormLabel fontWeight='bold'>Title</FormLabel>
              <Input rounded='md' variant='filled' autoComplete='off' bg='white' bgGradient='linear(to-r, whiteAlpha.400 , blackAlpha.100)' onChange={handletitle} value={title} />
            </FormControl>

            <FormControl isRequired >
              <FormLabel fontWeight='bold'>Email</FormLabel>
              <Input rounded='md' variant='filled' autoComplete='off' bg='white' bgGradient='linear(to-r, whiteAlpha.400 , blackAlpha.100)' onChange={handleemail} value={email} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight='bold'>Phone Country Code</FormLabel>
              <Select bg='white' bgGradient='linear(to-r, whiteAlpha.400 , blackAlpha.100)' >
                <option value='option1'>+91</option>
                <option value='option2'>+1</option>
                <option value='option2'>+2</option>
                <option value='option3'>+3</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight='bold'>Phone </FormLabel>
              <Input rounded='md' variant='filled' type='number' autoComplete='off' bg='white' bgGradient='linear(to-r, whiteAlpha.400 , blackAlpha.100)' onChange={handlenum} value={num} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight='bold'>Resume </FormLabel>
            </FormControl>

            <Text mt="-1.5%" fontWeight='semibold' paddingBottom='2'>Be sure to include an updated resume</Text>
            <Input
              type="file"
              accept='.pdf'
              onChange={handleload}
              display="none"
              id='pdf-upload'
            />

            <label htmlFor='pdf-upload'>
              <Button
                type='file'
                as="div" size="sm" rounded='3xl' bg='black' color='white' variant="outline" colorScheme="white"
                px="2"
                w="7rem"
                h="2rem"
                cursor="pointer"
                disabled={isLoading}
                _disabled={{
                  opacity: 0.4,
                  cursor: "not-allowed"
                }}
              >
                {isLoading ? (
                  <CircularProgress size="28px" isIndeterminate color="teal" />
                ) : (
                  <Box
                    as="span"
                    color="white"
                    fontSize="sm"
                    border="black"
                  >
                    Upload resume
                  </Box>
                )}
              </Button>
            </label>
            {fileName && (
                <Box ml={4}>
                    <Flex alignItems="center">
                        <Text fontSize="sm">{fileName}</Text>
                        <IconButton
                            icon={<AiOutlineCloseCircle />}
                            size="xs"
                            ml={2}
                            onClick={handleCancelClick}
                            aria-label="Cancel"
                        />
                    </Flex>
                </Box>
            )}


          </ModalBody>



          <ModalFooter>
            <Button bg='black' color='white' mr={3} onClick={onClose} rounded='3xl' colorScheme='blue'>
              Submit Application
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
