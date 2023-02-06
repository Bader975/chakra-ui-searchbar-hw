import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";


 function Nav(){
  const bg = useColorModeValue("white", "gray.400");
  const mobileNav = useDisclosure();

  const logout=()=>{
    localStorage.clear();
  }

  return (
    <React.Fragment>
      <chakra.header
        bg={"teal.800"}
        
        w="full"
        
      p='5' rounded='lg'
      mb={10}
      color="gray.900"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" 
      boxShadow='lg' p='5' rounded='lg' >
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
     
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" rounded="md" mr={5}>
                <Image
    boxSize='90px'
    rounded={50}
    m={2}
    src='https://i0.wp.com/eduschool40.blog/wp-content/uploads/2021/09/%D8%A8%D8%AF%D9%88%D9%86-%D8%B9%D9%86%D9%88%D8%A7%D9%86-40.jpg'
  /> 
            هي لنا دار  
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center"  mx={"auto"} >
            <HStack
              spacing={50}
              // mr={"auto"}
              p={"30"}
              w={"auto"}
              bg={"teal.800"}
              rounded="lg"  
              color="gray.100"
              boxShadow='lg' 
            
              display={{ base: "none", md: "flex" }}
            >
                
              <Button variant="ghost"><Link to='/search'><SearchIcon fontSize={25} bg={"transparent"}/>      للبحث عن كلمة  </Link></Button>
              <Button variant="ghost"><Link to='/'>الصفحة الرئيسية</Link></Button>

              <Button variant="ghost" onClick={logout}><Link to='/'>تسجيل خروج</Link></Button>
            </HStack>
         
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Nav;