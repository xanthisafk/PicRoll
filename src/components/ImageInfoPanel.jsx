import { CopyIcon, DownloadIcon, ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import FileSaver, { saveAs } from 'file-saver'

function ImageInfoPanel({ submission }) {
    return (
        <Box
            className={"image-info-panel"}
            position={"absolute"}
            top={1}
            right={1}
            transition={".2s ease-in-out"}
        >
            <HStack>
                <IconButton
                    icon={<InfoIcon />}
                    colorScheme="orange"
                />
                <IconButton
                    icon={<ExternalLinkIcon />}
                    colorScheme="orange"
                    onClick={() => window.open(submission.permalink)}
                />
                <IconButton
                    icon={<CopyIcon />}
                    colorScheme="orange"
                    onClick={() => {navigator.clipboard.writeText(submission.url)}}
                />
                <IconButton
                    icon={<DownloadIcon />}
                    colorScheme="orange"
                    onClick={() => {
                        //const name = submission.url.split("/")
                        const link = document.createElement("a");
                        link.target = "_blank";
                        link.href = submission.url;
                        //document.appendChild(link)
                        link.click();
                        //document.removeChild(link)
                    }}
                />
            </HStack>
        </Box>
    )
}

export default ImageInfoPanel