import {
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    Switch,
    Text,
    VStack,
    useColorMode,
} from '@chakra-ui/react';

import COLORS from '../data/colorScheme.json';

const SettingsModal = ({
    isOpen,
    onClose,
    colorScheme,
    colorSchemeChange,
    nsfw,
    toggleNsfw,
    KEYS
 }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const toggleNsfwInLocalStorage = (event) => {

        toggleNsfw(KEYS.nsfw, event.target.checked ? "0" : "1")
    }
    const changeColorSchemeInLocalStorage = (event) => {
        colorSchemeChange(event.target.value);
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text fontSize={"xl"} className="title-font">Preferences</Text>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>

                    <VStack width={"100%"} align={"stretch"}>
                        <HStack justify={"space-between"}>
                            <Text>Disable NSFW</Text>
                            <Switch
                                colorScheme={colorScheme}
                                defaultChecked={!nsfw}
                                onChange={toggleNsfwInLocalStorage}
                            />
                        </HStack>
                        <HStack justify={"space-between"}>
                            <Text>Dark theme</Text>
                            <Switch
                                colorScheme={colorScheme}
                                defaultChecked={colorMode === 'dark'}
                                onChange={toggleColorMode}
                            />
                        </HStack>
                        <HStack justify={"space-between"}>
                            <Text>Colors</Text>
                            <Select
                                defaultValue={colorScheme}
                                colorScheme={colorScheme}
                                maxWidth={"40%"}
                                onChange={changeColorSchemeInLocalStorage}
                            >{COLORS.map((obj, index) => {
                                return (
                                    <option key={index} value={obj.value}>{obj.text}</option>
                                )
                            })}
                            </Select>
                        </HStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SettingsModal