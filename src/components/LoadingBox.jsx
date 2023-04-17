import {
  Box,
  Divider,
  Flex,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import MasonryLayout from "./MasonryLayout";
import Images from "./Images";
import { useCallback, useRef } from "react";

const LoadingBox = ({
  isLoading,
  data,
  exampleSearch,
  colorScheme,
  moreSubmissions,
  nextPage
}) => {
  const observer = useRef();
  const firstRef = useCallback(node => {
    if (observer.current) observer.current.disconnect(); // disconnect previous
    if (isLoading) return; // dont attach if it is still loading
    if (!moreSubmissions) return; // no need if there are no more submissions
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        nextPage();
      }
    })
    if (node) observer.current.observe(node);
  }, [isLoading, moreSubmissions])

  return (
    <>
      
      {isLoading && 
        <Box
          width={10}
          height={10}
          bg={"transparent"}
          borderRadius={3}
          position={"fixed"}
          zIndex={10}
          bottom={2}
          left={2}
        >
          <Spinner width={10} height={10} color={`${colorScheme}.600`} thickness="10px" />
        </Box>
      }

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
              
              // select 10th last item
              // or item in the middle
              // or first item if item in middle throws an error?
              const index = data.indexOf(data.at(-10)) === -1
                            ? data.indexOf(data.at(Math.ceil(data.length / 2) ?? 0))
                            : data.indexOf(data.at(-10))

              if (index === key1) { 
                return (
                  <Images
                    firstRef={firstRef}
                    key={`${key1}${key2}`}
                    item={item}
                    photo={image}
                    count={`${key1}-${key2}`}
                    colorScheme={colorScheme}
                  />
                );
              } else {
                return (
                  <Images
                  key={`${key1}${key2}`}
                  item={item}
                  photo={image}
                  count={`${key1}-${key2}`}
                  colorScheme={colorScheme}
                />
                )
              }
            })
          })}
          {
            moreSubmissions &&
            [1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i}
                  m={3}
                  height={`${Math.floor(Math.random() * (60 - 40 + 1)) + 30}vh`}
                  width={"90%"}
                />
            ))

          }
        </MasonryLayout>
      )}
      {data.length !== 0 && !moreSubmissions && (
        <Flex
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Divider width={"85%"} height={5} my={5} opacity={0} />
          <Text
            my={5}
            fontSize={"2xl"}
          >End of reel!</Text>
        </Flex>
      )}
    </>
  )
};

export default LoadingBox;
