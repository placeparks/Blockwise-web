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
  const bgImage = useBreakpointValue({ base: "./First-page/277.png", md: "" });
  const paddingRight = useBreakpointValue({ base: "0", md: "9%" });
  const marginTop = useBreakpointValue({ base: "5%", md: "-150px" });

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'left'}
        bgImage={bgImage}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
   
        <Stack spacing={4} w={'full'} maxW={'lg'}>
          <Box marginTop={marginTop} style={{textAlign:"left", color:"white"}}>
            <Text fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} style={{fontWeight:"700"}}
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    zIndex: -1,
                  }}
            >
              Blockchain
            </Text>
            <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
              <Text>
                Decentralizing The World
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Since 2016 Through Forward-Thinking Enterprise Blockchain Solutions
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1} paddingRight={paddingRight}>
        <Box 
          display={{ base: "none", md: "block" }}
          h={600} 
          w="full"
          backgroundImage={`url(${"./First-page/276.png"})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Flex>
    </Stack>
  );
}
