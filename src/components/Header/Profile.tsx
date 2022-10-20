import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinícius Santos</Text>
        <Text color="gray.300" fontSize="small">
          vinibsp10@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vinícius Bernardes"></Avatar>
    </Flex>
  );
}