import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    const paddingRight = useBreakpointValue({ base: "0", md: "5%" });
    const marginTop = useBreakpointValue({ base: "5%", md: "-150px" });
    const imageHeight = useBreakpointValue({ base: "400px", md: "500px" });
    
    return (
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={9}
          flex={1}
          align={'center'}
          justify={'left'}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
    
        >
     
          <Stack spacing={4} w={'full'} maxW={'lg'}>
            <Box marginTop={marginTop} style={{textAlign:"left", color:"black"}}>
        
              <Heading fontSize={{ base: '4xl', md: '4xl', lg: '4xl' }}>
                <Text mt={{md:"40%", sm:"5%"}}>
                Cryptocurrency Wallet Development Company
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Welcome to Blockwise tech your trusted partner in blockchain wallet development. Our team of expert developers and designers is dedicated to creating customized wallet solutions that are secure, user-friendly, and tailored to the unique needs of your business or organization.
              </Text>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1} paddingRight={paddingRight}>
        <Box 
    h={imageHeight} 
    w="full"
    backgroundImage={`url(${'/Wallet/wallet.png'})`}
    backgroundSize="cover"
    backgroundPosition="center"
  />
        </Flex>
      </Stack>
    );
  }
  