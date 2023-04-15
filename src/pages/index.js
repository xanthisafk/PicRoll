import PicRollHead from '@/components/Head'
import Logo from '@/components/Logo'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { BiSliderAlt } from 'react-icons/bi';

import sort from '../data/sort.json';
import useColorScheme from '@/hooks/useColorScheme'
import extractSubredditName from '@/lib/extractSubredditName'
import { toastErrorMessage } from '@/lib/toastErrorMessage'
import Backdrop from '@/components/Backdrop'
import SettingsModal from '@/components/SettingsModal'
import useLocalStorage from '@/hooks/useLocalStorage'

import FOOT from '@/data/footer.json';

const Home = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const searchRef = useRef();
  const sortRef = useRef();
  const toast = useToast();
  const settingModalTriggers = useDisclosure();
  const ls = useLocalStorage();

  const routeUser = (event) => {
    event.preventDefault();
    const sub = searchRef.current.value;
    if (!sub) {
      toastErrorMessage({ message: "Please enter a subreddit." }, toast);
    }
    const sort = sortRef.current.value;

    const subreddit = extractSubredditName(sub);
    router.push(`/${subreddit}/${sort}/`);

  }
  return (
    <>
      <PicRollHead colorScheme={colorScheme.colorScheme} />
      <Backdrop gradient={colorScheme.gradient} />
      <main>
        <Flex
          width={"100vw"}
          height={"100vh"}
          direction={"column"}
          justify={"center"}
          align={"center"}
        >
          <Box
            width={200}
            minW={50}
            cursor={"pointer"}
            onClick={() => router.push("/")}
            marginBottom={5}
          >
            <Logo />
          </Box>
          <Container
            size={"xl"}
          >
            <form onSubmit={routeUser}>
              <Input
                ref={searchRef}
                placeholder={"subreddit name"}
                fontSize={"lg"}
                my={1}
              />

              <Select
                ref={sortRef}
                fontSize={"lg"}
                my={3}
              >
                {sort.map((item, index) => (
                  <option key={index} value={item.value}>{item.text}</option>
                ))}
              </Select>

              <HStack my={3}>
                <Button
                  type={"submit"}
                  width={"90%"}
                  colorScheme={colorScheme.colorScheme}
                >{`Let's Roll`}</Button>
                <IconButton
                  width={"10%"}
                  icon={<BiSliderAlt />}
                  onClick={settingModalTriggers.onOpen}
                ></IconButton>
              </HStack>
            </form>
            <Text
              cursor={"pointer"}
              textAlign={"center"}
              _hover={{
                "text-decoration": "underline"
              }}
              onClick={() => router.push(FOOT.github)}
            >{FOOT.text} {FOOT.author}</Text>
            <Text
              cursor={"pointer"}
              fontStyle={"italic"}
              fontSize={"xs"}
              textAlign={"center"}
              _hover={{
                "text-decoration": "underline"
              }}
              onClick={() => router.push(FOOT.projectUrl)}
            >
              {FOOT.projectSourceText}
            </Text>
          </Container>
        </Flex>
        <SettingsModal
          onClose={settingModalTriggers.onClose}
          isOpen={settingModalTriggers.isOpen}
          KEYS={ls.KEYS}
          colorScheme={colorScheme.colorScheme}
          colorSchemeChange={colorScheme.changeColorScheme}
          nsfw={ls.isNsfwEnabled}
          toggleNsfw={ls.setItem}
        />
      </main>
    </>
  )
}

export default Home