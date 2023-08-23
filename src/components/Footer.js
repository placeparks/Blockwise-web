<<<<<<< HEAD:src/components/Footer.js
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue, useBreakpointValue
} from "@chakra-ui/react";
import styles from './Main/Home.module.css';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  const iconSize = useBreakpointValue({ base: "40px", md: "22px" });
  return (
    <div className={styles.section9}>
    <Box
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} alignItems="stretch">
          <Stack align={"flex-start"} style={{textAlign:"left"}}>
            <ListHeader>SERVICES</ListHeader>
            <Link href={"#"}>&#11166; NFT Development</Link>
            <Link href={"#"}>&#11166; Metaverse Development</Link>
            <Link href={"#"}>&#11166; NFT Marketplace Development</Link>
            <Link href={"#"}>&#11166; NFT Gaming Plateform Development</Link>
            <Link href={"#"}>&#11166; DeFi Decentralized Finance Development</Link>
            <Link href={"#"}>&#11166; White Lable Exchange</Link>
            <Link href={"#"}>&#11166; Decentralized Exchange Development</Link>
            <Link href={"#"}>&#11166; Wallet</Link>
            <Link href={"#"}>&#11166; Coin Development</Link>

          </Stack>

          <Stack align={"flex-start"} style={{textAlign:"left"}}>
          <div id='contact'>
          <ListHeader>CONTACT</ListHeader>
            <Link href={"mailto:support@blockwisetech.com"}>
            &#x1F4E7; support@blockwisetech.com</Link> <br/>
            <Link href={"#"}><iconify-icon icon="simple-line-icons:location-pin"></iconify-icon> First floor, 16 GCP opposite Shoukat Khanum, Johar town, Lahore</Link>
            <Link href={"#"}> &#x2706; +92 321-6787388</Link>
            <Text>HR Contact:</Text>
            <Link href={"mailto:hr@blockwisetech.com"}>&#x1F4E7; hr@blockwisetech.com</Link>
            <Link href={"#"}> &#x2706; +92 308 4062226</Link>
            </div>
          </Stack>

          <Stack align={"flex-start"} style={{textAlign:"left"}}>
            <ListHeader>ABOUT US</ListHeader>
            <Link href={"#"}>&#11166; Media</Link>
            <Link href={"#"}>&#11166; We are Hiring</Link>
            <Link href={"#"}>&#11166; Patner With Us</Link>
            <Link href={"#"}>&#11166; Life at Blockwise tech</Link>
          </Stack>

          <Stack align={"flex-start"}>
          <img src='logo.png' alt=""/>
            <ListHeader>Blockwise technologies</ListHeader>
            <Link href={"#"}>©2023 All right reserved</Link>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </div>
  )
}
=======
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue, useBreakpointValue
} from "@chakra-ui/react";
import styles from './Home.module.css';
import { HiLocationMarker } from "react-icons/hi";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  const iconSize = useBreakpointValue({ base: "40px", md: "22px" });
  return (
    <div className={styles.section9}>
    <Box
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} alignItems="stretch">
          <Stack align={"flex-start"} style={{textAlign:"left"}}>
            <ListHeader>SERVICES</ListHeader>
            <Link href={"#"}>&#11166; NFT Development</Link>
            <Link href={"#"}>&#11166; Metaverse Development</Link>
            <Link href={"#"}>&#11166; NFT Marketplace Development</Link>
            <Link href={"#"}>&#11166; NFT Gaming Plateform Development</Link>
            <Link href={"#"}>&#11166; DeFi Decentralized Finance Development</Link>
            <Link href={"#"}>&#11166; White Lable Exchange</Link>
            <Link href={"#"}>&#11166; Decentralized Exchange Development</Link>
            <Link href={"#"}>&#11166; Wallet</Link>
            <Link href={"#"}>&#11166; Coin Development</Link>

          </Stack>

          <Stack align={"flex-start"} style={{textAlign:"left"}}>
          <div id='contact'>
          <ListHeader>CONTACT</ListHeader>
            <Link href={"mailto:support@blockwisetech.com"}>&#x1F4E7; support@blockwisetech.com</Link> <br/>
            <Link href={"#"}><iconify-icon icon="simple-line-icons:location-pin"></iconify-icon> 50-N, Gurumangat Road Gulberg, Lahore</Link>
            <Link href={"#"}> &#x2706; +92 321-6787388</Link>
            <Text>HR Contact:</Text>
            <Link href={"mailto:hr@blockwisetech.com"}>&#x1F4E7; hr@blockwisetech.com</Link>
            <Link href={"#"}> &#x2706; +92 308 4062226</Link>
            </div>
          </Stack>

          <Stack align={"flex-start"} style={{textAlign:"left"}}>
            <ListHeader>ABOUT US</ListHeader>
            <Link href={"#"}>&#11166; Media</Link>
            <Link href={"#"}>&#11166; We are Hiring</Link>
            <Link href={"#"}>&#11166; Patner With Us</Link>
            <Link href={"#"}>&#11166; Life at Blockwise tech</Link>
          </Stack>

          <Stack align={"flex-start"}>
          <img src='logo.png' alt=""/>
            <ListHeader>Blockwise technologies</ListHeader>
            <Link href={"#"}>©2023 All right reserved</Link>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </div>
  )
}
>>>>>>> 39fbac171266024a47de6950ceb0183d554f0a14:src/components/Main/Footer.js
