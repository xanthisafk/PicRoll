import {
    Box,
    Img as ChakraImage,
    Skeleton,
    keyframes,
    useDisclosure
} from '@chakra-ui/react';
import NextImage from 'next/image'
import ImageInfoPanel from './ImageInfoPanel';
import { gradientHelper } from '@/lib/gradientHelper';

function Images({ item, photo, colorScheme }) {
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
            className={"image-box"}
            width={"100%"}
            padding={1.5}
            position={"relative"}
            display={"inline-block"}
            transition={".2s"}
            backgroundClip={"padding-box"}
            backgroundSize={"400% 400%"}
            border={"8px solid transparent"}
            borderRadius={2}
            
            _hover={{
                animation: animation,
                content: "''",
                width: "100%",
                backgroundColor: `${colorScheme}.300`,
                // backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                backgroundImage: gradientHelper(colorScheme),
                borderRadius: 20,
            }}
        >

            <ChakraImage
                width={"100%"}
                onClick={onOpen}
                fallback={<Skeleton width={"100%"} height={"30vh"} />}
                src={photo}
                alt={item.title}
                borderRadius={"md"}
                outline={"0px solid transparent"}
                transition={".2s ease-in-out"}
                _active={{
                    transform: "scale(0.99)"
                }}
                onError={() => null}
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