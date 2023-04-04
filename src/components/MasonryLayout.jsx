import { Flex, Box } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MasonryLayout({ children }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 2, 900: 3}}
      style={{
        width: "100%",
        padding: "16px"
      }}
    >
      <Masonry>
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryLayout;
