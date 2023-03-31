import { Box, Grid } from "@chakra-ui/react";

function MasonryLayout({ children }) {
  return (
    <Box
      // templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      padding={4}
      w="100%"
      // gap={6}
      // alignItems={"center"}
    >
      {children}
    </Box>
  );
}

export default MasonryLayout;
