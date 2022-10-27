import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useIsWideVersion } from "../../hooks/useIsWideVersion";

export default function UserList() {
  const isWideVersion = useIsWideVersion();

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px={["4", "6", "8"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontSize={["lg", "xl"]} fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              {isWideVersion ? (
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              ) : (
                <IconButton
                  as="a"
                  size="sm"
                  aria-label="create user"
                  colorScheme="pink"
                  icon={<Icon as={RiAddLine} fontSize="20" />}
                />
              )}
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vini Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      vinibsp10@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril de 2021</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      as="a"
                      size="sm"
                      aria-label="edit user"
                      colorScheme="purple"
                      icon={<Icon as={RiPencilLine} fontSize="16" />}
                    />
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
