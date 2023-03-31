/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Image, Skeleton, Text } from "@chakra-ui/react";
import MasonryLayout from "./MasonryLayout";
import ImageInfoPanel from "./ImageInfoPanel";

const LoadingBox = (props) => {
  const isLoading = props.isLoading ?? false;
  const data = props.data ?? [];

  return (
    <>
      {/* Show greeting message when isLoading is false and data is empty */}
      {!isLoading && data.length === 0 &&
      <Box width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Text textAlign={"center"}>Get started by searching for your favourite subreddit.</Text>
      </Box>}
      
      {/* Show skeleton boxes when isLoading is true and data is empty */}
      {isLoading && (
        <MasonryLayout>
          <Skeleton height="60vh" my="10px" />
          <Skeleton height="40vh" my="10px" />
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
                {
                  item.type === "image"  &&
                  <Image
                    width={"100%"}
                    src={item.url}
                    alt={item.title}
                    title={item.title}
                    borderRadius={"md"}
                />
                }
              <ImageInfoPanel submission={item} />
              </Box>
          )})}
        </MasonryLayout>
      )}
    </>
  );
};

export default LoadingBox;