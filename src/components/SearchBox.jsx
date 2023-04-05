import {
    Box,
    Button,
    HStack,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    Switch,
    Text,
    VStack,
    useColorMode,
    useDisclosure,
    useToast
} from '@chakra-ui/react'
import Logo from './Logo'
import { IoPersonSharp } from 'react-icons/io5';
import { BiSliderAlt } from "react-icons/bi";


import sort from '../data/sort.json';
import meta from '../data/meta.json';
import colorSchemes from '../data/colorScheme.json';
import examples from '../data/exampleSubs.json';


import { useRef } from 'react';
import extractSubredditName from '@/lib/extractSubredditName';
import { toastErrorMessage } from '@/lib/toastErrorMessage';
import { handleClientRequest } from '@/lib/handleClientRequest';
import { setAuthState } from '@/lib/authState';
import { authorizationURLGenerator } from '@/lib/backend/authorizationURLGenerator';
import { useEffect } from 'react';
import { getColorScheme, setColorScheme } from '@/lib/colorSchemeHandler';


const SearchBox = ({ data, dataSetter, loading, loadingSetter, colorScheme, colorSchemeSetter }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef("");
    const sortRef = useRef("");
    const schemeRef = useRef("orange")
    const toast = useToast();

    loadingSetter(true)
    console.log(loadingSetter)

    useEffect(() => {
        const scheme = getColorScheme();
        colorSchemeSetter(() => scheme)
        // schemeRef.current && schemeRef.current.value = scheme;
    })

    

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        loadingSetter(() => true);
        await handleRequest();
        loadingSetter(() => false);
    }

    const signIn = (event) => {
        event.preventDefault();
        const { generatedURL, state } = authorizationURLGenerator()
        setAuthState(state);

        window.location = generatedURL;
    }

    return (
        <>
            <Box
                display={"block"}
                borderRadius={"2xl"}
                backdropFilter={{ blur: '10px' }}
                // width={{ base: "100%", lg: "24vw", xl: "24vw" }}
                p={5}
            >
                <HStack
                    my={1}
                    justify={'space-between'}
                >
                    <Logo
                        width={100}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.location = "/"}
                    />

                    <IconButton onClick={signIn} color={`${colorScheme}.300`} icon={<IoPersonSharp />} />

                </HStack>
                <form onSubmit={handleSubmit}>
                    <Input my={1} type={"text"} placeholder={"subreddit name"} ref={searchRef} />
                </form>
                <Select my={1} ref={sortRef}>
                    {sort.map((item, index) => (
                        <option key={index} value={item.value}>{item.text}</option>
                    ))}
                </Select>
                <HStack my={1}>
                    <Button
                        width="80%"
                        onClick={handleSubmit}
                        colorScheme={colorScheme}
                    >{`Let's Roll`}</Button>
                    
                    <IconButton
                        width={"20%"}
                        icon={<BiSliderAlt />}
                        onClick={onOpen}
                    />
                </HStack>
                {
                    !loading && !data.length && (
                        <></>
                    )
                }
            </Box>
            
        </>
    )
}

export default SearchBox