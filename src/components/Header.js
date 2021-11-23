import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const Header = ()=> {
    return(
        <Flex my="2" px="2">
            <Flex alignItems="center">
                <Heading size="md">Code Here</Heading>
            </Flex>
            <Spacer/>
            <Box>
            <Button boxShadow="lg" rounded="md" colorScheme="teal" ml="2">
                Sign Up
            </Button>
            <Button boxShadow="lg" rounded="md" colorScheme="teal" ml="2">Log in</Button>
            </Box>
        </Flex>
    )
}

export default Header;