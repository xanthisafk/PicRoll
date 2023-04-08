import useColorScheme from '@/hooks/useColorScheme'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Backdrop = ({gradient}) => {
  const colors = gradient();
  return (
    <Box
    className={"bg-gradient"}
    backgroundImage={`radial-gradient(${colors.from}, ${colors.to})`}
    >

    </Box>
  )
}

export default Backdrop