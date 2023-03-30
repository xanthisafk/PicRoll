/* eslint-disable react/no-children-prop */
import Head from 'next/head'
import Image from 'next/image'
import meta from '../../data/meta.json'
import sort from '../../data/sort.json'
import { Box, Button, Flex, IconButton, Input, InputGroup, InputLeftAddon, Select, Skeleton, Text, useColorMode } from '@chakra-ui/react';
import logo from '../../public/logo.jpg'
import MasonryLayout from '../../components/MasonryLayout'
import "@fontsource/fasthand"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react';
import LoadingBox from '../../components/LoadingBox';


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
  
  const subredditRef = useRef("");
  const sortRef = useRef("");
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
          >
            {/* Search box */}
            <InputGroup padding={2}>
              <InputLeftAddon children={meta.searchLeadingText} />
              <Input
                variant={'outline'}
                placeholder={meta.searchPlaceholder}
              />
            </InputGroup>

            <Flex direction={"row-reverse"}>
              {/* Search button */}
              <Button
                margin={2}
                colorScheme={"orange"}
              >{meta.searchButtonText}</Button>

              {/* Sort Select */}
              <Select width={{ base: "100%", lg: "20%", md: "40%" }} margin={2}>
                {sort.time.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </Select>

              {/* Toggle theme */}
              {/* <Button
                margin={2}
                onClick={toggleColorMode}
              >
                {
                  colorMode === 'dark'
                    ? <SunIcon color={"orange.400"} />
                    : <MoonIcon color={"blue.200"} />
                }
              </Button> */}
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

        <LoadingBox />

          {/* <MasonryLayout>
            <Skeleton h="200px" />
            <Skeleton h="250px" />
            <Skeleton h="150px" />
            <Skeleton h="150px" />
            <Skeleton h="250px" />
            <Skeleton h="350px" />
            Add more grid items here
          </MasonryLayout> */}
      </main>
    </>
  )
}
