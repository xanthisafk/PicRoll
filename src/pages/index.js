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

import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

import Logo from '@/components/Logo';
import PicRollHead from '@/components/Head';
import { IoPersonSharp } from 'react-icons/io5';
import { BiSliderAlt } from 'react-icons/bi';
import SettingsModal from '@/components/SettingsModal';
import { getColorScheme, setColorScheme } from '@/lib/colorSchemeHandler';
import { useRouter } from 'next/router';
import LoadingBox from '@/components/LoadingBox';
import { getNsfw, setNsfw } from '@/lib/nsfwHandler';
import { useRedditData } from '@/hooks/useRedditData';


export default function Home() {

  // Head
  const [siteTitle, setSiteTitle] = useState(meta.title);

  // Search
  const router = useRouter();
  const toast = useToast();

  const [subreddit, setSubreddit] = useState("");
  const [sorting, setSorting] = useState("hot");
  const [isNsfwEnabled, setNsfwEnable] = useState(true);

  const subredditChange = event => {
    setSubreddit(event.target.value);
  }

  const sortingChange = event => {
    setSorting(event.target.value)
  }


  const {
    start, next, hasMore, data, loading
  } = useRedditData(subreddit, sorting, isNsfwEnabled)


  const handleSubmitOrClick = event => {
    event.preventDefault();
    next();
  }


  // Settings modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorScheme, colorSchemeSetter] = useState(getColorScheme());

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
    return null
  }


  // Loading Box
  const searchExample = (subreddit) => {
    null
  }

  return (
    <>
      <PicRollHead title={siteTitle} />

      <main style={{ minHeight: "100vh" }}>
        <ScrollToTop colorScheme={colorScheme} />
        <Box
          display={"block"}
          borderRadius={"2xl"}
          p={5}
        >
          <HStack
            my={3}
            justify={"space-between"}
          >
            <Logo
              width={100}
              style={{ "cursor": "pointer" }}
              onClick={() => window.location = "/"}
            />
            <IconButton
              onClick={() => null}
              color={`${colorScheme}.300`}
              icon={<IoPersonSharp />}
            />
          </HStack>
          <form onSubmit={handleSubmitOrClick}>
            <Input
              value={subreddit}
              onChange={subredditChange}
              fontSize={"lg"}
              type={"text"}
              placeholder={"subreddit name"}
            />
          </form>
          <Select
            my={1}
            onChange={sortingChange}
            value={sorting}
            fontSize={"lg"}
          >
            {sort.map((item, index) => (
              <option key={index} value={item.value}>{item.text}</option>
            ))}
          </Select>
          <HStack>
          <Button
            width={"90%"}
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
          />
        </Box>
        <LoadingBox
          data={data}
          colorScheme={colorScheme}
          isLoading={loading}
          exampleSearch={searchExample}
          moreSubmissions={hasMore}
          nextPage={next}
        />
      </main>
      <Footer />
    </>
  )
}
