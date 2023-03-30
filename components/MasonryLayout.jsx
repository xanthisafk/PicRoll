import { Grid } from "@chakra-ui/react";

function MasonryLayout({ children }) {
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={6}
      alignItems={"center"}
    >
      {children}
    </Grid>
  );
}

export default MasonryLayout;
