import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Dev user00</Text>
        <Text color="gray.300" fontSize="small">
          user00user00@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Fernanda Leite" src="" />
    </Flex>
  );
}
