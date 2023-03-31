import {
    Box,
    Flex,
    HStack,
    Text
} from '@chakra-ui/react';
import logo from '../../public/logo.jpg';
import Image from 'next/image';
import meta from '../data/meta.json';
import footer from '../data/footer.json';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi'
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Footer() {
    return (
        <Flex
            width={"100%"}
            justify={"center"}
            align={"center"}
            wrap={"wrap"}
            borderTop={"2px solid gray"}
            padding={6}
        >
            <Box
                padding={5}
                width={250}
                borderRadius={"lg"}
            >
                <Image src={logo} alt="logo of website" />
            </Box>
            <Box padding={5}>
                <Text
                    fontSize={"6xl"}
                    color={"orange.300"}
                    fontFamily={`"Fasthand", cursive`}
                >{meta.title}</Text>
                <Text
                    fontSize={"sm"}
                    onClick={() => window.open(footer.projectUrl)}
                    cursor={"pointer"}
                    textStyle={"italic"}
                    _hover={{textDecoration: 'underline'}}
                >View source on GitHub <ExternalLinkIcon /></Text>
                <Text>{footer.text} <Link href={footer.mainUrl}>{footer.author}</Link></Text>
                <HStack paddingY={3}>
                    <Text
                        onClick={() => window.open(footer.github)}
                        fontSize={"2xl"}
                        transition={".1s ease-in-out"}
                        cursor={"pointer"}
                        title={"Open author's github"}
                        _hover={{
                            color: "lightgray"
                        }}
                    ><FiGithub /></Text>
                </HStack>
            </Box>
        </Flex>
    )
}

export default Footer