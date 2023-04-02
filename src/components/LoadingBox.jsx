/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Skeleton,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import MasonryLayout from "./MasonryLayout";
import SubredditCard from "./SubredditCard";
import examples from "../data/exampleSubs.json";
import meta from "../data/meta.json";
import Images from "./Images";

const getSkeletons = (len) => {
    let remainder = len % 3;
    remainder = remainder == 0 ? 3 : remainder;
    console.log({remainder, len})
    const array = new Array()
    array.length = remainder;
    array.map((_, i) => {
      return (<Skeleton
          key={i}
          width={"12vw"}
          height={"10vh"}
      />)
    })
}

const LoadingBox = (props) => {
  const isLoading = props.isLoading ?? false;
  const data = props.data ?? [];

  return (
    <>
      {/* Show greeting message when isLoading is false and data is empty */}
      {!isLoading && data.length === 0 && (
        <Flex
          position={"relative"}
          width={"100%"}
          minHeight={"0"}
          marginY={3}
          padding={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"auto"}
          wrap={"wrap"}
        >
          <Text textAlign={"center"}>{meta.nothingLoadedText}</Text>
          <Flex paddingTop={3} flexWrap={"wrap"} justify={"center"} gap={3}>
            {examples.map((sub, index) => {
              return (
                <SubredditCard
                  key={index}
                  data={sub}
                  searchSomething={props.searchSomething}
                />
              );
            })}
          </Flex>
        </Flex>
      )}

      {/* Show skeleton boxes when isLoading is true and data is empty */}
      {isLoading && (
        <MasonryLayout>
          <Skeleton height="60vh" m="10px" />
          <Skeleton height="45vh" m="10px" />
          <Skeleton height="55vh" m="10px" />
          <Skeleton height="20vh" m="10px" />
          <Skeleton height="60vh" m="10px" />
          <Skeleton height="40vh" m="10px" />
        </MasonryLayout>
      )}

      {/* Show data when isLoading is false and data is not empty */}
      {!isLoading && data.length > 0 && (
        <MasonryLayout>
          
          {data.map((item, key1) => {

            return item.images.map((image, key2) => {
              return (
                <Images key={`${key1}${key2}`} item={item} photo={image} count={`${key1}-${key2}`} />
              );
            })
          })}
          { getSkeletons(data.length - 1) }
        </MasonryLayout>
      )}
    </>
  );
};

export default LoadingBox;
