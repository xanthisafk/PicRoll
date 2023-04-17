import META from '@/data/meta.json';
import SORT from '@/data/sort.json';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

import Logo from '@/components/Logo';
import PicRollHead from '@/components/Head';
import { BiSliderAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import LoadingBox from '@/components/LoadingBox';
import useColorScheme from '@/hooks/useColorScheme';
import { useRedditData } from '@/hooks/useRedditData';
import useLocalStorage from '@/hooks/useLocalStorage';
import Backdrop from '@/components/Backdrop';
import SettingsModal from '@/components/SettingsModal';
import useFavourites from '@/hooks/useFavourites';
import { StarIcon } from '@chakra-ui/icons';
import extractSubredditName from '@/lib/extractSubredditName';
import GoogleAnalytics from '@/components/GoogleAnalytics';


export default function Page() {

    const router = useRouter();
    const { subreddit, sort } = router.query;

    const { colorScheme, changeColorScheme, gradient } = useColorScheme();
    const ls = useLocalStorage();
    const favourite = useFavourites(subreddit);

    const subredditRef = useRef();
    const sortingRef = useRef();

    const { data, fetchMore, resetData, loading, hasMore } = useRedditData(subreddit, sort, ls.isNsfwEnabled);

    const siteTitle = !subreddit ? META.title : `${subreddit} - ${META.title}`

    const exampleSearch = () => null

    const settingModalTriggers = useDisclosure(); 

    const redirectUser = (event) => {
        event.preventDefault();
        
        const newSubreddit = extractSubredditName(subredditRef.current.value);
        const newSorting = sortingRef.current.value;
        resetData();
        subredditRef.current.value = newSubreddit;
        if (newSubreddit === subreddit && newSorting === sort) {
            router.reload();
        }
        else {router.push(`/${newSubreddit}/${newSorting}`)}
    }


    return (
        <>
            <PicRollHead title={siteTitle} colorScheme={colorScheme} />
            <Backdrop gradient={gradient} />
            <main style={{ minHeight: "100vh" }}>
            <GoogleAnalytics />
                <ScrollToTop colorScheme={colorScheme} />
                <Box
                    display={"block"}
                    borderRadius={"2xl"}
                    p={10}
                >
                    <Flex
                        my={3}
                        align={"center"}
                        justify={"space-around"}
                    >
                        <Logo
                            style={{
                                "cursor": "pointer",
                                width: "100px",
                                height: "100px"
                            }}
                            onClick={() => router.push("/")}
                        />
                        <Box
                            flexGrow={1}
                            mx={5}
                        >
                            <form onSubmit={redirectUser}>
                                <InputGroup>
                                <InputLeftElement
                                    onClick={() => {
                                        favourite.isCurrentSubredditFavourite
                                        ? favourite.remove(subreddit)
                                        : favourite.add(subreddit)
                                    }}
                                    cursor={"pointer"}
                                    transition={".2s"}
                                    _hover={{
                                        transform: "scale(1.1)"
                                    }}
                                    _active={{
                                        transform: "scale(1)"
                                    }}
                                >
                                    <StarIcon
                                        color={
                                            favourite.isCurrentSubredditFavourite
                                            ? `${colorScheme}.400`
                                            : "gray"
                                        }

                                    />
                                </InputLeftElement>
                                <Input
                                    ref={subredditRef}
                                    defaultValue={subreddit}
                                    fontSize={"lg"}
                                    type={"text"}
                                    placeholder={"subreddit name"}
                                />
                                </InputGroup>
                                <Select
                                    ref={sortingRef}
                                    my={1}
                                    fontSize={"lg"}
                                    defaultValue={sort}
                                >
                                    {SORT.map((item, index) => (
                                        <option key={index} value={item.value}>{item.text}</option>
                                    ))}
                                </Select>
                                <HStack>
                                    <Button
                                        type={"submit"}
                                        width={"90%"}
                                        colorScheme={colorScheme}
                                        aria-label={"search"}
                                    >{`Let's Roll`}</Button>
                                    <IconButton
                                        width={"20%"}
                                        icon={<BiSliderAlt />}
                                        onClick={settingModalTriggers.onOpen}
                                        aria-label={"open settings"}
                                    />
                                </HStack>
                            </form>
                        </Box>
                    </Flex>
                </Box>
                
                <LoadingBox
                    data={data}
                    isLoading={loading}
                    moreSubmissions={hasMore}
                    nextPage={fetchMore}
                    exampleSearch={exampleSearch}
                    colorScheme={colorScheme}
                />
            </main>
            <SettingsModal
                onClose={settingModalTriggers.onClose}
                isOpen={settingModalTriggers.isOpen}
                KEYS={ls.KEYS}
                colorScheme={colorScheme}
                colorSchemeChange={changeColorScheme}
                nsfw={ls.isNsfwEnabled}
                toggleNsfw={ls.setItem}
            />
            <Footer />
        </>
    )
}
