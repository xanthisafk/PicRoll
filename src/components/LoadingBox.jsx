import {
  Box,
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
import { useCallback, useEffect, useRef } from "react";



const LoadingBox = ({ isLoading, data, exampleSearch, colorScheme, moreSubmissions, nextPage }) => {

  const observer = useRef();
  const firstRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        nextPage();
      }
    })
    if (node) observer.current.observe(node);
  }, [isLoading, moreSubmissions])

  return (
    <>
      {!isLoading && !data.length && (
        <Flex
          width={"100%"}
          minHeight={"50vh"}
          align={"center"}
          justify={"center"}
          direction={"column"}
          p={2}
        >
          <Text
            as={"h3"}
            fontSize={"xl"}
            textAlign={"center"}
            py={2}
          >{meta.nothingLoadedText}</Text>
          <Box width={"100%"}>
            <Flex width={"100%"} justify={"center"} wrap={"wrap"}>
              {examples.length && examples.map((cat, i) =>
                <SubredditCard
                  key={i}
                  data={cat}
                  exampleSearch={exampleSearch}
                  colorScheme={colorScheme}
                />
              )}
            </Flex>
          </Box>
        </Flex>
      )}

      <MasonryLayout>
        {isLoading && data.length === 0 && [1, 2, 3, 4, 5, 6].map((_, i) =>
          <Skeleton
            key={i}
            m={5}
            height={`${Math.floor(Math.random() * (60 - 40 + 1)) + 30}vh`}
          />
        )}
      </MasonryLayout>



      {data.length > 0 && (
        <MasonryLayout>
          {data.map((item, key1) => {
            return item.images.map((image, key2) => {
              if (key2 + 1 === item.images.length) {
                return (
                  <Images
                    key={`${key1}${key2}`}
                    item={item}
                    photo={image}
                    count={`${key1}-${key2}`}
                    colorScheme={colorScheme}
                  />
                );
              }
            })
          })}
          {
            moreSubmissions &&
            [1, 2, 3, 4, 5, 6].map((i) => {
              if (i === 1) {
                return <Skeleton key={i}
                ref={firstRef}
                m={3}
                height={`${Math.floor(Math.random() * (60 - 40 + 1)) + 30}vh`}
                width={"90%"} />
              } else {
                return <Skeleton key={i}
                m={3}
                height={`${Math.floor(Math.random() * (60 - 40 + 1)) + 30}vh`}
                width={"90%"} />
              }
          })

          }
        </MasonryLayout>
      )}
      {data.length !== 0 && !moreSubmissions && (
        <Text fontSize={"lg"}>{`That's all folks!`}</Text>
      )}
    </>
  )
};

export default LoadingBox;
