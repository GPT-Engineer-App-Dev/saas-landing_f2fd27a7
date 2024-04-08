import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRocket, FaCloud, FaLock, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"7xl"} p={12}>
      <Stack align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Cloud-based Solutions,
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              for Modern Businesses
            </Text>
          </Heading>
          <Text color={"gray.500"}>Our platform provides one-click cloud solutions to help your business thrive in the digital age. Enjoy secure, scalable, and user-friendly applications.</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }} rightIcon={<FaArrowRight />}>
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} leftIcon={<FaCloud />}>
              Learn more
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Blob w={"150%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color={useColorModeValue("blue.50", "blue.900")} />
          <Box position={"relative"} height={"300px"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
            <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3MTI1NDM1MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          </Box>
        </Flex>
      </Stack>

      <Features />
    </Container>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={"blue.500"} color={"white"}>
        {icon}
      </Flex>
      <VStack align={"start"}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </VStack>
    </Stack>
  );
};

const Features = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<FaRocket size={"3em"} />} title={"Fast & Efficient"} text={"Experience swift cloud integration and management."} />
        <Feature icon={<FaCloud size={"3em"} />} title={"Cloud Native"} text={"Build and scale applications with ease in a fully managed environment."} />
        <Feature icon={<FaLock size={"3em"} />} title={"Secure"} text={"Protect your data with our top-notch security measures."} />
      </SimpleGrid>
    </Box>
  );
};

const Blob = (props) => {
  return (
    <Icon width={"100%"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M577.984 359.5C577.984 442.926 492.06 430.5 417 430.5C341.94 430.5 298.5 442.926 298.5 359.5C298.5 276.074 224.5 217 148.5 217C72.5 217 0 276.074 0 359.5H577.984Z" fill="currentColor" />
    </Icon>
  );
};

export default Index;
