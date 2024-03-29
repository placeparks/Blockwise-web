import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  HStack,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const linksData = [
  { name: "Home", href: "/Main" },
  { name: "Web3 Mobile App", href: "/Web3" },
  { name: "Metaverse", href: "/MetaversePage" },
  { name: "NFT", href: "/NFT" },
  { name: "Defi", href: "/DefiProtocol" },
  { name: "Exchange", href: "/ExchangePage" },
  { name: "Wallet", href: "/Wallets" },
  { name: "Blockchain", href: "/Blockchains" },
  { name: "Coin Development", href: "/CoinDevelopment" },
  { name: "Blog", href: "/Blog" },
  {name: "Contact", href: "#contact"}
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  const NavLink = ({ children, href }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
      onClick={(e) => {
        if (href === "#contact") {
          e.preventDefault();
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }
        handleNavLinkClick();
      }}
    >
      {children}
    </Link>
  );
  

  const HomeButton = ({ children, href }) => {
    const path = window.location.pathname;
    return path === "/Web3" || path === "/NFT" || path === "/MetaversePage" || path === "/DefiProtocol" || path === "/ExchangePage" || path === "/Wallets" || path === "/Blockchains" || path === "/CoinDevelopment" || path === "/Blog" || path === "#contact" ? (
      <NavLink children={children} href={href} />
    ) : null;
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
              isOpen ? onClose() : onOpen();
            }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src="./logo.png" alt="" />
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {linksData.map((link) =>
                link.name === "Home" ? (
                  <HomeButton key={link.name} href={link.href}>
                    {link.name}
                  </HomeButton>
                ) : (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                )
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isMobileNavOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {linksData.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
