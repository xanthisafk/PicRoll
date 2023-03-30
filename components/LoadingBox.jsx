/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton, Text } from "@chakra-ui/react";
import MasonryLayout from "./MasonryLayout";

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
          <Skeleton height="50px" my="10px" />
          <Skeleton height="60px" my="10px" />
          <Skeleton height="20px" my="10px" />
        </MasonryLayout>
      )}
      
      {/* Show data when isLoading is false and data is not empty */}
      {!isLoading && data.length > 0 && (
        <MasonryLayout>
          {data.map((item, key) => (
              <img
                key={key}
                src={item.url}
                alt={item.title}
                title={item.title}
              />
          ))}
        </MasonryLayout>
      )}
    </>
  );
};

export default LoadingBox;