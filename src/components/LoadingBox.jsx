import {
  Flex,
  HStack,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import MasonryLayout from "./MasonryLayout";
import SubredditCard from "./SubredditCard";
import examples from "../data/exampleSubs.json";
import meta from "../data/meta.json";
import Images from "./Images";
import SearchBox from "./SearchBox";


const LoadingBox = ({ isLoading, data, exampleSearch }) => {

  return (
    <>
      {!isLoading && !data.length && (
        <Flex
          width={"100%"}
          height={"50vh"}
          align={"center"}
          justify={"center"}
          direction={"column"}
          p={5}
        >
          <Text>Hello!</Text>
          <HStack>
          {examples.length && examples.map((cat, i) =>
            <SubredditCard key={i} data={cat} exampleSearch={exampleSearch} />
          )}
          </HStack>
        </Flex>
      )}

      <MasonryLayout>
      {isLoading && [1,2,3,4,5,6].map((_, i) =>
        <Skeleton m={5} key={i}
          height={`${Math.floor(Math.random() * (60 - 40 + 1)) + 30}vh`} />
      )}
      </MasonryLayout>

      {!isLoading && data.length && (
        <Images />
      )
      }

    </>
  )
};

export default LoadingBox;
