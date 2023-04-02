import {
    Box,
    Image as ChakraImage,
    useDisclosure
} from '@chakra-ui/react'
import ImageInfoPanel from './ImageInfoPanel'
import { getColorScheme } from '../lib/colorSchemeHandler'

function Images({ item, photo }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const colorScheme = getColorScheme()
    return (
        <Box
            className={"image-box"}
            width={"100%"}
            mb={2}
            display={"inline-block"}
            position={"relative"}
            boxShadow={'xl'}
        >

            <ChakraImage
                width={"100%"}
                src={photo}
                alt={item.title}
                borderRadius={"md"}
                onClick={onOpen}
                outline={"0px solid transparent"}
                transition={".2s ease-in-out"}
                _hover={{
                    outlineWidth: "2px",
                    outlineColor: `${colorScheme}.300`
                }}
            />

            <ImageInfoPanel
                submission={item}
                photo={photo}
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
            />
        </Box>
    )
}

export default Images