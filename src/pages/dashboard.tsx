import { Header } from "@/components/Header";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

function Dashboard() {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="Flex-start">
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da Semana
              </Text>
            </Box>
            <Box p="8" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" mb="4">
                Taxa de Abertura
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
