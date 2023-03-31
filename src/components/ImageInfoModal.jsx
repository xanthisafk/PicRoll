import { ArrowUpIcon, AtSignIcon, ExternalLinkIcon, LinkIcon, TimeIcon } from '@chakra-ui/icons';
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
    useColorMode,
    Button,
    HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link'

const ImageInfoModal = ({ isOpen, onClose, data }) => {
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
                    <Flex justify={"center"} direction={{base: 'column', md: 'row', lg: 'row'}}>
                        <Image
                            src={url}
                            alt={title}
                            maxH={{base: '60vh', md: '70vh', lg: '90vh'}}
                            borderRadius={"md"}
                        />
                        <Box p={4}>
                            <Text fontSize={"3xl"} color={"#ff4500"}>{title}</Text>
                            <Text fontSize={"md"}>
                                <ArrowUpIcon color={"#ff4500"} /> {`${upvotes} (${upvoteRatio * 100}%)`}</Text>
                            <Text fontSize={"md"}> <AtSignIcon /> {author}</Text>
                            <Text fontSize={"md"}> <TimeIcon /> {formattedDate} </Text>
                            <Text fontSize={"md"}>
                                <LinkIcon /> <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={url}
                                > {host} <ExternalLinkIcon /> </Link></Text>
                            <HStack marginY={2}>
                                <Button>Download</Button>
                                <Button

                                >Copy link</Button>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={permalink}
                                ><Button>Open in Reddit <ExternalLinkIcon /></Button></Link>
                                <Button onClick={onClose}>Close</Button>
                            </HStack>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ImageInfoModal;
