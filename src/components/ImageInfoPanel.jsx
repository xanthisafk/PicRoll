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

import { getColorScheme } from '../lib/colorSchemeHandler'

function ImageInfoPanel({ submission, onOpen, isOpen, onClose, photo }) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const toast = useToast();
    const colorScheme = getColorScheme();
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
                photo={photo}
                isOpen={isOpen}
                onClose={onClose}
                setter={setDownloaded}
                toast={toast}
            />

            <HStack>
                <IconButton
                    aria-label="open image information popup"
                    icon={<InfoOutlineIcon />}
                    colorScheme={colorScheme}
                    onClick={onOpen}
                />
                <IconButton
                    aria-label="open submission on reddit in new tab"
                    icon={<ExternalLinkIcon />}
                    colorScheme={colorScheme}
                    onClick={() => window.open(submission.permalink)}
                />
                <IconButton
                    aria-label="copy image url"
                    icon={copied ? <CheckIcon color={'green.300'} /> : <CopyIcon />}
                    colorScheme={colorScheme}
                    onClick={() => copyToClipboard(photo, setCopied, toast)}
                />
                <IconButton
                    aria-label="download image"
                    icon={downloaded ? <CheckIcon color={'green.300'} /> : <DownloadIcon />}
                    colorScheme={colorScheme}
                    onClick={() => downloadImage(photo, setDownloaded, toast)}
                />
            </HStack>
        </Box>
    )
}

export default ImageInfoPanel