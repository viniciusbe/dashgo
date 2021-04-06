import { Flex } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Sidebar } from '../components/SideBar';

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header></Header>

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar></Sidebar>
            </Flex> 
        </Flex>
    )
} 