import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage={'url(./Metaverse/Rectangle.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          align={'flex-start'} // Align text on the left
          pl={8} // Add left padding
        >
          <Stack maxW={'2xl'} spacing={6} textAlign={"left"}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}
            >
              Metaverse Development
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
            >
              Step into a new dimension of digital possibilities with Metaverse Development.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  