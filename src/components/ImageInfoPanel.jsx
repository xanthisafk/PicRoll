import {
    CheckIcon,
    CopyIcon,
    DownloadIcon,
    ExternalLinkIcon,
    InfoOutlineIcon
} from '@chakra-ui/icons';

import {
    Box,
    HStack,
    IconButton,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageInfoModal from './ImageInfoModal';
import copyToClipboard from '@/lib/copyToClipboard';
import downloadImage from '@/lib/downloadImage';

function ImageInfoPanel({ submission }) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            className={"image-info-panel"}
            position={"absolute"}
            top={1}
            right={1}
            transition={".2s ease-in-out"}
        >
            <ImageInfoModal
                data={submission}
                isOpen={isOpen}
                onClose={onClose}
                setter={setDownloaded}
                toast={toast}
            />

            <HStack>
                <IconButton
                    icon={<InfoOutlineIcon />}
                    colorScheme="orange"
                    onClick={onOpen}
                />
                <IconButton
                    icon={<ExternalLinkIcon />}
                    colorScheme="orange"
                    onClick={() => window.open(submission.permalink)}
                />
                <IconButton
                    icon={copied ? <CheckIcon color={'green.300'} /> : <CopyIcon />}
                    colorScheme="orange"
                    onClick={() => copyToClipboard(submission.url, setCopied, toast)}
                />
                <IconButton
                    icon={downloaded ? <CheckIcon color={'green.300'} /> : <DownloadIcon />}
                    colorScheme="orange"
                    onClick={() => downloadImage(submission.url, setDownloaded, toast)}
                />
            </HStack>
        </Box>
    )
}

export default ImageInfoPanel