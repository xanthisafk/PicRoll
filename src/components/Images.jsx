import {
    Box,
    Img as ChakraImage,
    Skeleton,
    SkeletonText,
    Spinner,
    keyframes,
    useDisclosure,
    usePrefersReducedMotion
} from '@chakra-ui/react'
import ImageInfoPanel from './ImageInfoPanel'
import Count from './Count';

function Images({ item, photo, count }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const spin = keyframes`
        from { background-image: linear-gradient(0deg, #ff4e00 0%, #ec9f05 74%) }
        to { background-image: linear-gradient(360deg, #ff4e00 0%, #ec9f05 74%) }
    `



    const reduceAnimation = usePrefersReducedMotion();

    const animation = reduceAnimation
        ? undefined
        : `${spin} infinite 5s alternate`

    return (
        <Box
            className={"image-box"}
            width={"100%"}
            padding={1.5}
            position={"relative"}
            display={"inline-block"}
            transition={".2s"}
            backgroundClip={"padding-box"}
            border={"8px solid transparent"}
            borderRadius={2}
            
            _hover={{
                animation: animation,
                content: "''",
                width: "100%",
                backgroundColor: "orange.300",
                backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
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
            />

            <ImageInfoPanel
                submission={item}
                photo={photo}
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
            />
            {/* <Count num={count} /> */}
        </Box>
    )
}

export default Images