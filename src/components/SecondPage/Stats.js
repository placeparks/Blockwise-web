import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function CustomDiv() {
  const spacing = useBreakpointValue({ base: "space-around", md: "space-evenly" });
  const color = "blue.600";  // Update this to your desired color

  return (
    <Flex justifyContent={spacing} alignItems="center" mt={9}>
      <Box>
        <Text fontSize={{md:"6xl", lg:"6xl", base:"4xl"}} fontWeight="bold" color={color}>
          5+
        </Text>
        <Text>Years of Blockchain Experience</Text>
      </Box>
      <Box>
        <Text fontSize={{md:"6xl", lg:"6xl", base:"4xl"}} fontWeight="bold" color={color}>
          100+
        </Text>
        <Text>Team Members</Text>
      </Box>
      <Box>
        <Text fontSize={{md:"6xl", lg:"6xl", base:"4xl"}} fontWeight="bold" color={color}>
          90%
        </Text>
        <Text>Blockchain Experts</Text>
      </Box>
    </Flex>
  );
}
