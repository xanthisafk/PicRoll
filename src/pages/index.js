/* eslint-disable react/no-children-prop */
import Head from 'next/head'
import Image from 'next/image'
import meta from '../data/meta.json'

import sort from '../data/sort.json'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Text,
  useColorMode,
  useToast
} from '@chakra-ui/react';
import logo from '../../public/logo.jpg'
import "@fontsource/fasthand"
import { CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import extractSubredditName from '../lib/extractSubredditName';
import ScrollToTop from '@/components/ScrollToTop';


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();

  const subredditRef = useRef("");
  const sortRef = useRef("");
  const [isLoading, setLoading] = useState(false);
  const [siteTitle, setSiteTitle] = useState(meta.title)
  const [data, setData] = useState([]);

  const toast = useToast();

  /**
 * Handles the form submission event by preventing the default behavior and calling the handleClick function.
 * @param {Object} event - The form submission event object.
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  }
  /**
  * Sets the loading state to true, calls fetchHandler, and then sets the loading state to false
  */
  const handleClick = async () => {
    setLoading(() => true);
    await fetchHandler();
    setLoading(() => false);
  }

  const toastErrorMessage = ({message}) => {
    toast({
      status: "error",
      title: "error",
      description: message,
      duration: 9000,
      isClosable: true
    })
  }

  const fetchHandler = async () => {
    const subreddit = extractSubredditName(subredditRef.current.value);
    if (!subreddit) { return alert("You did not enter a subreddit.") }
    const sort = sortRef.current.value;

    let error = false;
    const data = await fetch(`/api/v1/get_images/${subreddit}/${sort}`)
      .then(res => res.json())
      .then(res => {
        error = res.error;
        return res.data;
      })
      .catch(console.error)

      if (error) {
        toastErrorMessage(data);
      } else {
        setData(() => data);
        setSiteTitle(() => `${subreddit} - ${meta.title}`)
      }

  }

  const searchSomething = async (subreddit) => {
    subredditRef.current.value = subreddit;
    handleClick();
  }


  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta name="keywords" content={meta.keywords.replace("%%APPNAME%%", meta.title)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta property="og:image" content="/logo_hq.png" />
        <meta property="og:url" content="https://picroll.vercel.app" />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta name="twitter:image" content="/logo_hq.png" />
        <meta name="twitter:card" content="/logo_hq.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ScrollToTop />
        <Flex
          height={"15vh"}
          width={"100%"}
          align={"center"}
          justify={"space-evenly"}
        >
          {/* Logo */}
          <Box
            padding={3}
            width={100}
            borderRadius={"lg"}
            onClick={() => window.location = "/"}
            cursor={"pointer"}
          >
            <Image src={logo} alt="logo of website" />
            <Text
              textAlign={"center"}
              fontFamily={`"Fasthand", cursive`}
              fontSize={"2xl"}
              paddingY={1}
              color={"orange.300"}
            >PicRoll</Text>
          </Box>

          <Box
            flexGrow={1}
            height={"100%"}
            paddingY={3}
            paddingRight={3}
          >
            {/* Search box */}
            <form onSubmit={handleSubmit}>
              <InputGroup padding={2}>
                <InputLeftAddon children={meta.searchLeadingText} />
                <Input
                  ref={subredditRef}
                  variant={'outline'}
                  placeholder={meta.searchPlaceholder}
                />
                <InputRightAddon
                  cursor={"pointer"}
                  title={"Clear input"}
                  onClick={() => {subredditRef.current.value = ""}}
                >
                  <CloseIcon color={"red.400"} />
                </InputRightAddon>
              </InputGroup>
            </form>

            <Flex direction={"row-reverse"}>
              {/* Search button */}
              <Button
                margin={2}
                colorScheme={"orange"}
                onClick={handleClick}
              >{meta.searchButtonText}</Button>

              {/* Sort Select */}
              <Select
                width={{ base: "100%", lg: "20%", md: "40%" }}
                margin={2}
                ref={sortRef}
              >
                {sort.map((item, index) => (
                  <option key={index} value={item.value}>{item.text}</option>
                ))}
              </Select>

              <IconButton
                margin={2}
                onClick={toggleColorMode}
                icon={
                  colorMode === 'dark' ? <SunIcon color={"orange.400"} /> : <MoonIcon color={"blue.200"} />
                }
              />

            </Flex>

          </Box>
        </Flex>

        <LoadingBox isLoading={isLoading} data={data} searchSomething={searchSomething} />
      </main>
    </>
  )
}
