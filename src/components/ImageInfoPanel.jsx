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
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageInfoModal from './ImageInfoModal';
import copyToClipboard from '@/lib/copyToClipboard';
import downloadImage from '@/lib/downloadImage';

import meta from '../data/meta.json'

function ImageInfoPanel({ submission, colorScheme, onOpen, isOpen, onClose, photo }) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const toast = useToast();
    return (
        <Box
            className={"image-info-panel"}
            position={"absolute"}
            top={1}
            right={1}
            padding={2}
            transition={".2s ease-in-out"}
        >
            <ImageInfoModal
                colorScheme={colorScheme}
                data={submission}
                photo={photo}
                isOpen={isOpen}
                onClose={onClose}
                setter={setDownloaded}
                toast={toast}
            />

            <HStack>
                <IconButton
                    aria-label={meta.viewInfoButtonText}
                    title={meta.viewInfoButtonText}
                    icon={<InfoOutlineIcon />}
                    colorScheme={colorScheme}
                    onClick={onOpen}
                />
                <IconButton
                    aria-label={meta.externalButtonText}
                    title={meta.externalButtonText}
                    icon={<ExternalLinkIcon />}
                    colorScheme={colorScheme}
                    onClick={() => window.open(submission.permalink)}
                />
                <IconButton
                    aria-label={meta.copyLinkButtonText}
                    title={meta.copyLinkButtonText}
                    icon={copied ? <CheckIcon color={'green.300'} /> : <CopyIcon />}
                    colorScheme={colorScheme}
                    onClick={() => copyToClipboard(photo, setCopied, toast)}
                />
                <IconButton
                    aria-label={meta.downloadButtonText}
                    title={meta.downloadButtonText}
                    icon={downloaded ? <CheckIcon color={'green.300'} /> : <DownloadIcon />}
                    colorScheme={colorScheme}
                    onClick={() => downloadImage(photo, setDownloaded, toast)}
                />
            </HStack>
        </Box>
    )
}

export default ImageInfoPanel