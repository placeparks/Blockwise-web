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
          <Flex flex={1} paddingRight={paddingRight}>
        <Box 
    h={imageHeight} 
    w="full"
    backgroundImage={`url(${'/Wallet/wallet1.png' })`}
    backgroundSize="cover"
    backgroundPosition="center"
  />
        </Flex>
        <Flex
          p={9}
          flex={1}
          align={'justify'}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
    
        >
     
          <Stack spacing={4} w={'full'} maxW={'lg'}>
            <Box marginTop={marginTop} style={{color:"white"}}>
        
              <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
                <Text mt={{md:"20%", sm:"5%"}} style={{textAlign:"center"}}>
                Crypto Wallet Development Services: Widen Your Presence with Our Blockchain-Powered Wallets
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} style={{textAlign:"justify"}}>
             
      Crypto wallets are an essential tool for anyone who wants to buy, sell, or hold cryptocurrencies securely. Unlike traditional financial accounts, which are managed by third-party institutions such as banks or investment firms, crypto wallets allow individuals to maintain full control over their digital assets. With a crypto wallet, you can securely store your cryptocurrencies, receive and send payments, and monitor your transactions in real-time. Crypto wallets also provide an added layer of security, as they are designed to protect your digital assets from threats such as hacking or theft. Whether you are an individual investor or a business looking to integrate cryptocurrencies into your operations, using a crypto wallet is a convenient, secure, and cost-effective way to manage your digital assets. At Blockwise tech, we specialize in developing custom crypto wallet solutions that meet the unique needs and preferences of our clients.              </Text>
            </Box>
          </Stack>
        </Flex>
      
      </Stack>
    );
  }
  