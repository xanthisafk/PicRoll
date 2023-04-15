import {
    Box,
    Img as ChakraImage,
    Skeleton,
    keyframes,
    useDisclosure
} from '@chakra-ui/react';
import ImageInfoPanel from './ImageInfoPanel';

function Images({ item, photo, colorScheme, firstRef }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const spin = keyframes`
    0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    `


    const animation = `${spin} infinite 10s ease`

    return (
        <Box
            ref={firstRef ?? null}
            className={"image-box"}
            width={"100%"}
            padding={1.5}
            position={"relative"}
            display={"inline-block"}
            transition={".2s"}
            backgroundClip={"padding-box"}
            backgroundSize={"400% 400%"}
            borderRadius={20}
            _hover={{
                animation: animation,
                content: "''",
                width: "100%",
                borderRadius: 20,
                boxShadow:"dark-lg"
            }}
        >

            <ChakraImage
                className={"image"}
                loading={"lazy"}
                width={"100%"}
                onClick={onOpen}
                fallback={<Skeleton width={"100%"} height={"30vh"} />}
                src={photo}
                alt={item.title}
                borderRadius={"md"}
                outline={"0px solid transparent"}
                transition={".2s ease-in-out"}
                onError={() => null}
            />

            

            <ImageInfoPanel
                colorScheme={colorScheme}
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