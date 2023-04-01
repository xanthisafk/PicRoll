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
import ImageInfoPanel from "./ImageInfoPanel";
import SubredditCard from "./SubredditCard";
import examples from "../data/exampleSubs.json";
import meta from "../data/meta.json";

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
          <Skeleton height="60vh" my="10px" />
          <Skeleton height="45vh" my="10px" />
          <Skeleton height="55vh" my="10px" />
        </MasonryLayout>
      )}

      {/* Show data when isLoading is false and data is not empty */}
      {!isLoading && data.length > 0 && (
        <MasonryLayout>
          {data.map((item, key) => {
            return (
              <Box
                key={key}
                className={"image-box"}
                width={"100%"}
                mb={2}
                d={"inline-block"}
                position={"relative"}
              >
                {item.type === "image" && (
                  <Image
                    width={"100%"}
                    src={item.url}
                    alt={item.title}
                    borderRadius={"md"}
                  />
                )}
                <ImageInfoPanel submission={item} />
              </Box>
            );
          })}
        </MasonryLayout>
      )}
    </>
  );
};

export default LoadingBox;
