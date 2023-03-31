import {
    CheckIcon,
    CopyIcon,
    DownloadIcon,
    ExternalLinkIcon,
    InfoIcon
} from '@chakra-ui/icons';

import {
    Box,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageInfoModal from './ImageInfoModal';

function ImageInfoPanel({ submission }) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const toast = useToast();
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box
            className={"image-info-panel"}
            position={"absolute"}
            top={1}
            right={1}
            transition={".2s ease-in-out"}
        >
            <ImageInfoModal data={submission} isOpen={isOpen} onClose={onClose} />
            <HStack>
                <IconButton
                    icon={<InfoIcon />}
                    colorScheme="orange"
                    onClick={onOpen}
                />
                <IconButton
                    icon={<ExternalLinkIcon />}
                    colorScheme="orange"
                    onClick={() => window.open(submission.permalink)}
                />
                <IconButton
                    icon={copied ? <CheckIcon color={'green.300'} /> :<CopyIcon />}
                    colorScheme="orange"
                    onClick={() => {
                        navigator.clipboard.writeText(submission.url);
                        setCopied(() => true);
                        toast({
                            title: "Image URL copied.",
                            status: "success",
                            duration: 3000,
                            isClosable: true
                        })
                        setTimeout(() => setCopied(() => false), 3000);
                    }}
                />
                <IconButton
                    icon={downloaded ? <CheckIcon color={'green.300'} /> :<DownloadIcon />}
                    colorScheme="orange"
                    onClick={async () => {
                        setDownloaded(() => true);
                        const saver = (await import('file-saver')).default;
                        const name = submission.url.split("/");
                        fetch(`/api/v1/download/${encodeURIComponent(submission.url)}`)
                            .then(res => res.blob())
                            .then(blob => {
                                saver.saveAs(blob, name[name.length - 1]);
                            }
                        );
                        toast({
                            title: "Image downloaded.",
                            status: "success",
                            duration: 3000,
                            isClosable: true
                        })
                        setTimeout(() => setDownloaded(() => false), 3000);
                    }}
                />
            </HStack>
        </Box>
    )
}

export default ImageInfoPanel