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
    usePrefersReducedMotion,
    ModalFooter,
    VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import meta from '../data/meta.json'
import { getColorScheme } from '../lib/colorSchemeHandler'
import { gradientHelper } from '@/lib/gradientHelper';

const ImageInfoModal = ({ isOpen, onClose, colorScheme, data, setter, toast, photo }) => {
    const { title, domain, permalink, upvote_ratio, created, author, upvotes } = data;

    // create Date object from UTC date string
    const date = new Date(created * 1000);
    // formatting options
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    // convert to human-readable format
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={"6xl"}

        >
            <ModalOverlay />
            <ModalContent>

                <ModalBody>
                    <Flex
                        justify={"center"}
                        align={"center"}
                        maxWidth={"100%"}
                        direction={{ base: 'column', md: 'row', lg: 'row' }}
                        borderRadius={"md"}
                        backdropFilter={"blur(20px)"}
                    >
                        <Image
                            boxShadow={"dark-lg"}
                            flexShrink={1}
                            src={photo}
                            alt={title}
                            maxHeight={"80vh"}
                            objectFit={"contain"}
                            borderRadius={"md"}
                        />

                    </Flex>
                </ModalBody>
                <ModalFooter
                    flexDirection={"column"}
                >
                    {/* Title */}
                    <Text
                        className="title-font"
                        fontSize={"3xl"}
                        width={"100%"}
                        color={`${colorScheme}.300`}
                    >{title}</Text>
                    <Box
                        width={"100%"}
                    >
                        <HStack>
                            {/* Upvotes */}
                            <Text
                                fontSize={"md"}
                            >
                                <ArrowUpIcon
                                    className='icon'
                                    color={`${colorScheme}.300`}
                                /> {`${upvotes} (${upvote_ratio * 100}%)`}
                            </Text>

                            {/* Author */}
                            <Text fontSize={"md"}>
                                <AtSignIcon
                                    className='icon'
                                    color={`${colorScheme}.300`}
                                /><Link
                                    aria-label="open author's profile in new tab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.reddit.com/u/${author}`}
                                > {author}<ExternalLinkIcon
                                        className='icon'
                                        color={`${colorScheme}.300`}
                                    /></Link></Text>

                            {/* Created At */}
                            <Text fontSize={"md"}>
                                <TimeIcon
                                    className='icon'
                                    color={`${colorScheme}.300`}
                                /> {formattedDate}
                            </Text>

                            {/* Image permalink */}
                            <Text fontSize={"md"}>
                                <LinkIcon
                                    className='icon'
                                    color={`${colorScheme}.300`}
                                /><Link
                                    aria-label='open image in new tab'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={photo}
                                > {domain} <ExternalLinkIcon
                                        className='icon'
                                        color={`${colorScheme}.300`}
                                    /> </Link>
                            </Text>
                        </HStack>
                    </Box>
                    {/* Button Stack */}
                    <Box width={"100%"}>
                        <HStack>
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
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ImageInfoModal;
