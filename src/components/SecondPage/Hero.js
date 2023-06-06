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
    const paddingRight = useBreakpointValue({ base: "0", md: "9%" });
    const marginTop = useBreakpointValue({ base: "5%", md: "-150px" });
    const imageHeight = useBreakpointValue({ base: "400px", md: "600px" });
    return (
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={8}
          flex={1}
          align={'center'}
          justify={'left'}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
     
          <Stack spacing={4} w={'full'} maxW={'lg'}>
            <Box marginTop={marginTop} style={{textAlign:"left", color:"white"}}>
        
              <Heading fontSize={{ base: '4xl', md: '4xl', lg: '4xl' }}>
                <Text mt={{md:"50%", sm:"5%"}}>
                Web 3.0 Development Service
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Powered by Blockchain, NFTs, DeFi, Metaverse, AI, ML, and IoT. We create decentralized platforms for diverse needs.
              </Text>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1} paddingRight={paddingRight}>
        <Box 
    h={imageHeight} 
    w="full"
    backgroundImage={`url(${'./Web3.0/Blockchain.png'})`}
    backgroundSize="cover"
    backgroundPosition="center"
  />
        </Flex>
      </Stack>
    );
  }
  