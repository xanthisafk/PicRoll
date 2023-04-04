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
    usePrefersReducedMotion
} from '@chakra-ui/react';

import colorSchemes from '../data/colorScheme.json';
import sort from '../data/sort.json';

const SettingsModal = ({ isOpen, onClose, colorScheme, colorSchemeChange, nsfw, toggleNsfw, defaultSort, changeSort }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const shouldntAnimate = usePrefersReducedMotion();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset={shouldntAnimate ? "none" : "scale"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text className="title-font">Preferences</Text>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>

                    <VStack width={"100%"} align={"stretch"}>
                        <HStack justify={"space-between"}>
                            <Text>Disable NSFW</Text>
                            <Switch
                                colorScheme={colorScheme}
                                defaultChecked={!nsfw}
                                onChange={toggleNsfw}
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
                                onChange={colorSchemeChange}
                            >{colorSchemes.map((obj, index) => {
                                return (
                                    <option key={index} value={obj.value}>{obj.text}</option>
                                )
                            })}
                            </Select>
                        </HStack>
                        <HStack justify={"space-between"}>
                            <Text>Default sort</Text>
                            <Select
                                defaultValue={defaultSort}
                                onChange={changeSort}
                                maxW={"40%"}
                            >
                                {sort.map((item, index) => (
                                    <option key={index} value={item.value}>{item.text}</option>
                                ))}
                            </Select>
                        </HStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SettingsModal