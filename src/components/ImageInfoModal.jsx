import copyToClipboard from '@/lib/copyToClipboard';
import downloadImage from '@/lib/downloadImage';
import {
    ArrowUpIcon,
    AtSignIcon,
    ExternalLinkIcon,
    LinkIcon,
    TimeIcon
} from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Image,
    Flex,
    Box,
    Text,
    Button,
    HStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const ImageInfoModal = ({ isOpen, onClose, data, setter, toast }) => {
    const { title, url, permalink, upvoteRatio, createdAt, author, upvotes } = data;

    const date = new Date(createdAt * 1000); // create Date object from UTC date string
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }; // formatting options
    const formattedDate = date.toLocaleDateString('en-US', options); // convert to human-readable format

    const host = new URL(url).hostname;

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"full"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                <ModalCloseButton />
                </ModalHeader>
                
                <ModalBody>
                    <Flex
                        justify={"center"}
                        height={"80vh"}
                        direction={{base: 'column', md: 'row', lg: 'row'}}>
                        <Image
                            src={url}
                            alt={title}
                            // maxH={{base: '60vh', md: '70vh', lg: '90vh'}}
                            maxW={"50vw"}
                            objectFit={"contain"}
                            borderRadius={"md"}
                        />
                        <Box p={4}>
                            {/* Title */}
                            <Text fontSize={"3xl"} color={"#ff4500"}>{title}</Text>

                            {/* Upvotes */}
                            <Text fontSize={"md"}>
                                <ArrowUpIcon color={"#ff4500"} /> {`${upvotes} (${upvoteRatio * 100}%)`}</Text>

                            {/* Author */}
                            <Text fontSize={"md"}> <AtSignIcon /> {author}</Text>

                            {/* Created At */}
                            <Text fontSize={"md"}> <TimeIcon /> {formattedDate} </Text>

                            {/* Image permalink */}
                            <Text fontSize={"md"}>
                                <LinkIcon /> <Link
                                    aria-label='open image in new tab'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={url}
                                > {host} <ExternalLinkIcon /> </Link></Text>

                            {/* Button Stack */}
                            <HStack marginY={2}>

                                {/* Download */}
                                <Button colorScheme='orange'
                                    aria-label="download image"
                                    onClick={() => downloadImage(url, setter, toast)}
                                >Download</Button>

                                {/* Copy to clipboard */}
                                <Button colorScheme='orange'
                                    aria-label="copy link to image"
                                    onClick={() => copyToClipboard(url, setter, toast)}
                                >Copy link</Button>

                                {/* Reddit permalink */}
                                <Link
                                    aria-label='open submission on reddit'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={permalink}
                                ><Button colorScheme='orange'>Open in Reddit <ExternalLinkIcon /></Button></Link>

                                {/* Close modal */}
                                <Button
                                    aria-label='close popup'
                                    onClick={onClose}
                                    colorScheme='red'>Close</Button>
                            </HStack>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ImageInfoModal;
