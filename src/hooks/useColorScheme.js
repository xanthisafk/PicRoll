import { useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const useColorScheme = () => {
    const key = "picroll-color-scheme"
    const [colorScheme, setColorScheme] = useState("gray");
    const { colorMode } = useColorMode();

    const changeColorScheme = (scheme) => {
        localStorage.setItem("picroll-color-scheme", scheme);
        setColorScheme(scheme);
    }

    const gradient = () => {
        let from, to;
        const currentModeIsLight = colorMode === 'light'
        switch (colorScheme) {
            case "red":
                if (currentModeIsLight) {
                    from = "#da6565";
                    to = "#c60202";
                } else {
                    from = "#530000";
                    to = "#251111";
                }
                break;

            case "orange":
                if (currentModeIsLight) {
                    from = "#ff8d00";
                    to = "#c6ac6b";
                } else {
                    from = "#db841b";
                    to = "#281c00";
                }
                break;

            case "green":
                if (currentModeIsLight) {
                    from = "#a2d061";
                    to = "#257c00";
                } else {
                    from = "#5a910b";
                    to = "#061400";
                }
                break;

            case "yellow":
                if (currentModeIsLight) {
                    from = "#d7bf00";
                    to = "#9d8070";
                } else {
                    from = "#bfaa00";
                    to = "#2b2a02";
                }
                break;

            case "blue":
                if (currentModeIsLight) {
                    from = "#000a95";
                    to = "#5a629e";
                } else {
                    from = "#000873";
                    to = "#040406";
                }
                break;

            case "purple":
                if (currentModeIsLight) {
                    from = "#7a00b6";
                    to = "#892498";
                } else {
                    from = "#280079";
                    to = "#8200f2";
                }
                break;

            case "pink":
                if (currentModeIsLight) {
                    from = "#aa0392";
                    to = "#d495d1";
                } else {
                    from = "#8a0076";
                    to = "#280026";
                }
                break;

            case "teal":
                if (currentModeIsLight) {
                    from = "#9BF1FF";
                    to = "#48B1BF";
                } else {
                    from = "#4C4C4C";
                    to = "#48B1BF";
                }
                break;

            case "cyan":
                if (currentModeIsLight) {
                    from = "#00bbbb";
                    to = "#67afaf";
                } else {
                    from = "#006e6e";
                    to = "#000909";
                }
                break;

            default:
                if (currentModeIsLight) {
                    from = "#b1b1b1";
                    to = "#6a6a6a";
                } else {
                    from = "#626262";
                    to = "#121212";
                }
                break;
        }
        const gradient = `linear-gradient(315deg, ${from} 0%, ${to} 74%)`
        return { from, to, gradient };
    }

    useEffect(() => {
        if (localStorage.getItem(key) === null) {
            changeColorScheme("cyan");
        }
        setColorScheme(() => localStorage.getItem(key));
        window.addEventListener("storage", event => {
            if (event.key === key) {
                setColorScheme(() => localStorage.getItem(key))
            }
        })
    }, [])

    return {
        colorScheme, gradient, changeColorScheme
    }
}

export default useColorScheme