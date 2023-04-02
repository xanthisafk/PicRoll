import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Count({num}) {
  return (
    <Box
        width={"3vw"}
        height={"3vw"}
        position={"absolute"}
        top={1}
        left={1}
        borderRadius={"md"}
        bg={"white"}
    >
        <Text color="black">{num}</Text>
    </Box>
  )
}

export default Count