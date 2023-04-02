import {
    Box,
    Flex,
    HStack,
    Text,
    Link as ChakraLink,
    useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { getColorScheme } from '../lib/colorSchemeHandler'

import meta from '../data/meta.json';
import footer from '../data/footer.json';
import logo from '../../public/logo.jpg';

function Footer() {
    const linkColor = useColorModeValue('gray.900', 'gray.100');
    const hoverColor = useColorModeValue('gray.700', 'gray.300');

    const colorScheme = getColorScheme();

    const openUrl = (url) => window.open(url);

    return (
        <Flex
            width="100%"
            justify="center"
            align="center"
            wrap="wrap"
            borderTop="2px solid gray"
            padding={6}
        >
            <Box padding={5} width={250} borderRadius="lg">
                <Image src={logo} alt="logo of website" />
            </Box>
            <Box padding={5}>
                <Text
                    fontSize="6xl"
                    color={`${colorScheme}.300`}
                    fontFamily={`"Fasthand", cursive`}
                >
                    {meta.title}
                </Text>
                <ChakraLink
                    fontSize="sm"
                    cursor="pointer"
                    textStyle="italic"
                    _hover={{ textDecoration: 'underline' }}
                    onClick={() => openUrl(footer.projectUrl)}
                    aria-label="open project's GitHub"
                >
                    View source on GitHub <ExternalLinkIcon />
                </ChakraLink>
                <Text>
                    {footer.text}{' '}
                    <ChakraLink
                        aria-label="open author's website"
                        href={footer.mainUrl}
                        color={linkColor}
                        _hover={{ color: hoverColor }}
                    >
                        {footer.author}
                    </ChakraLink>
                </Text>
                <HStack paddingY={3}>
                    <Text
                        onClick={() => openUrl(footer.github)}
                        aria-label="open author's GitHub"
                        fontSize="2xl"
                        transition=".1s ease-in-out"
                        cursor="pointer"
                        title="Open author's GitHub"
                        _hover={{ color: hoverColor }}
                    >
                        <FiGithub />
                    </Text>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Footer;
