import {
  Divider,
  Flex,
  Skeleton,
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
              if ((data.length > 10) && (key1 === data.length - 10)) {
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
