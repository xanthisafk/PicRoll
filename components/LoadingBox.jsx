import { Box, Skeleton, Text } from "@chakra-ui/react";

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
      {isLoading && data.length === 0 && (
        <>
          <Skeleton height="20px" my="10px" />
          <Skeleton height="20px" my="10px" />
          <Skeleton height="20px" my="10px" />
        </>
      )}
      
      {/* Show data when isLoading is false and data is not empty */}
      {!isLoading && data.length > 0 && (
        <>
          {data.map((item) => (
            <Box key={item.id}>
              <p>{item.title}</p>
              <img src={item.imageUrl} alt={item.title} />
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default LoadingBox;