import { Box } from '@chakra-ui/react'

const Backdrop = ({gradient}) => {
  const colors = gradient();
  return (
    <Box
    className={"bg-gradient"}
    backgroundImage={`radial-gradient(${colors.from}, ${colors.to})`}
     />
  )
}

export default Backdrop