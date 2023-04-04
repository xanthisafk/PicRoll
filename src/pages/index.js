import meta from '../data/meta.json';
import sort from '../data/sort.json';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Select,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import extractSubredditName from '../lib/extractSubredditName';

import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

import { handleClientRequest } from '@/lib/handleClientRequest';
import { toastErrorMessage } from '@/lib/toastErrorMessage';
import Logo from '@/components/Logo';
import PicRollHead from '@/components/Head';
import { IoPersonSharp } from 'react-icons/io5';
import { BiSliderAlt } from 'react-icons/bi';
import SettingsModal from '@/components/SettingsModal';
import { getColorScheme, setColorScheme } from '@/lib/colorSchemeHandler';
import { useRouter } from 'next/router';
import LoadingBox from '@/components/LoadingBox';
import { getNsfw, setNsfw } from '@/lib/nsfwHandler';
import { getDefaultSort, setDefaultSort } from '@/lib/deafultSortHandler';


export default function Home() {

  // Head
  const [siteTitle, setSiteTitle] = useState(meta.title)

  // Search
  const router = useRouter();
  const searchRef = useRef();
  const sortRef = useRef();
  const toast = useToast();

  const [isLoading, setLoading] = useState(false);
  const [data, dataSetter] = useState([]);

  const handleSubmitOrClick = async (event) => {
    event.preventDefault();
    setLoading(() => true);
    await handleRequest();
    setLoading(() => false)
  }

  const handleRequest = async () => {
    const subreddit = extractSubredditName(searchRef.current.value);
    if (!subreddit) { return toastErrorMessage({ message: "You did not enter any subreddit" }, toast) }
    const sort = sortRef.current.value ?? "hot";

    const response = await handleClientRequest(subreddit, sort);

    if (response.error) {
      toastErrorMessage(data.data, toast);
    } else {
      dataSetter(() => response.data.posts);
      setSiteTitle(() => `${subreddit} - ${meta.title}`);
    }
  }

  // Settings modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorScheme, colorSchemeSetter] = useState("gray");
  const [isNsfwEnabled, setNsfwEnable] = useState(true);
  const [defaultSort, setDefSort] = useState("hot")

  const colorSchemeChange = (event) => {
    const color = event.target.value;
    setColorScheme(color);
    colorSchemeSetter(() => color)
  }

  const toggleNsfw = () => {
    const newState = !isNsfwEnabled;
    setNsfwEnable(() => newState);
    setNsfw(newState);
  }

  const changeSort = (event) => {
    const sort = event.target.value;
    setDefaultSort(sort);
    setDefSort(() => sort)
  }

  useEffect(() => {
    const color = getColorScheme();
    const nsfw = getNsfw();
    const def = getDefaultSort();
    colorSchemeSetter(() => color)
    setNsfwEnable(() => nsfw);
    setDefSort(() => def);
  }, [])

  return (
    <>
      <PicRollHead title={siteTitle} />
      <main style={{ minHeight: "100vh" }}>
        <ScrollToTop />
        <Box
          display={"block"}
          borderRadius={"2xl"}
          backdropFilter={{ blur: '10px' }}
          p={5}
        >
          <HStack
            my={1}
            justify={'space-between'}
          >
            <Logo
              width={100}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
            <IconButton onClick={() => null} color={`${colorScheme}.300`} icon={<IoPersonSharp />} />

          </HStack>
          <form onSubmit={handleSubmitOrClick}>
            <Input my={1} type={"text"} placeholder={"subreddit name"} ref={() => null} />
          </form>
          <Select my={1} ref={sortRef} defaultValue={defaultSort}>
            {sort.map((item, index) => (
              <option key={index} value={item.value}>{item.text}</option>
            ))}
          </Select>
          <HStack my={1}>
            <Button
              width="80%"
              onClick={handleSubmitOrClick}
              colorScheme={colorScheme}
            >{`Let's Roll`}</Button>

            <IconButton
              width={"20%"}
              icon={<BiSliderAlt />}
              onClick={onOpen}
            />
          </HStack>
          <SettingsModal
            colorScheme={colorScheme}
            colorSchemeChange={colorSchemeChange}
            isOpen={isOpen}
            onClose={onClose}
            nsfw={isNsfwEnabled}
            toggleNsfw={toggleNsfw}
            defaultSort={defaultSort}
            changeSort={changeSort}
          />
        </Box>

          <LoadingBox data={data} isLoading={isLoading} />

      </main>
      <Footer />
    </>
  )
}
