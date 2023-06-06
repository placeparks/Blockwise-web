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
    const imageHeight = useBreakpointValue({ base: "300px", md: "500px" });
    const width= useColorModeValue({base:"300px", md:"600px"})
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
            <Box marginTop={marginTop} style={{textAlign:"left", color:"white"}} width={width}>
        
              <Heading fontSize={{ base: '4xl', md: '4xl', lg: '4xl' }}>
                <Text mt={{md:"50%", sm:"5%"}}>
                NFT Token Development Services
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Maximize the value of your digital assets with our NFT services. We specialize in leveraging blockchain technology to help businesses and creators monetize their unique digital creations. Join us today and unlock a world of limitless possibilities for your digital assets.
              </Text>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1} paddingRight={paddingRight}>
        <Box 
    h={imageHeight} 
    w="full"
    backgroundImage={`url(${'./Nfts/3dart.png'})`}
    backgroundSize="cover"
    backgroundPosition="center"
  />
        </Flex>
      </Stack>
    );
  }
  