import { Box } from "@chakra-ui/react";

function MasonryLayout({ children }) {
  return (
    <Box
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      padding={4}
      width="100%"
    >
      {children}
    </Box>
  );
}

export default MasonryLayout;
