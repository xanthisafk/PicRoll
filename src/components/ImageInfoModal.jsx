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

import meta from '../data/meta.json'
import { getColorScheme } from '../lib/colorSchemeHandler'

const ImageInfoModal = ({ isOpen, onClose, data, setter, toast, photo }) => {
    const { title, domain, permalink, upvote_ratio, created, author, upvotes } = data;

    // create Date object from UTC date string
    const date = new Date(created * 1000);

    // formatting options
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

     // convert to human-readable format
    const formattedDate = date.toLocaleDateString('en-US', options); 

    const colorScheme = getColorScheme();

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
                            src={photo}
                            alt={title}
                            maxW={"50vw"}
                            objectFit={"contain"}
                            borderRadius={"md"}
                        />
                        <Box p={4}>
                            {/* Title */}
                            <Text fontSize={"3xl"} color={`${colorScheme}.300`}>{title}</Text>

                            {/* Upvotes */}
                            <Text fontSize={"md"}>
                                <ArrowUpIcon color={`${colorScheme}.300`} /> {`${upvotes} (${upvote_ratio * 100}%)`}</Text>

                            {/* Author */}
                            <Text fontSize={"md"}> <AtSignIcon  color={`${colorScheme}.300`} /> {author}</Text>

                            {/* Created At */}
                            <Text fontSize={"md"}> <TimeIcon color={`${colorScheme}.300`} /> {formattedDate} </Text>

                            {/* Image permalink */}
                            <Text fontSize={"md"}>
                                <LinkIcon color={`${colorScheme}.300`} /> <Link
                                    aria-label='open image in new tab'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={photo}
                                > {domain} <ExternalLinkIcon color={`${colorScheme}.300`} /> </Link></Text>

                            {/* Button Stack */}
                            <HStack marginY={2}>

                                {/* Download */}
                                <Button colorScheme={colorScheme}
                                    aria-label="download image"
                                    onClick={() => downloadImage(photo, setter, toast)}
                                >Download</Button>

                                {/* Copy to clipboard */}
                                <Button colorScheme={colorScheme}
                                    aria-label="copy link to image"
                                    onClick={() => copyToClipboard(photo, setter, toast)}
                                >Copy link</Button>

                                {/* Reddit permalink */}
                                <Link
                                    aria-label='open submission on reddit'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={permalink}
                                ><Button colorScheme={colorScheme}>Open in Reddit <ExternalLinkIcon /></Button></Link>

                                {/* Close modal */}
                                <Button
                                    aria-label='close popup'
                                    onClick={onClose}
                                    colorScheme={colorScheme === 'red' ? 'orange' : 'red'}>Close</Button>
                            </HStack>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ImageInfoModal;
