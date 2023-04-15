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
        if (colorMode === 'light') {
            from = `var(--chakra-colors-${colorScheme}-200)`
            to = `var(--chakra-colors-${colorScheme}-400)`
        } else {
            from = `var(--chakra-colors-${colorScheme}-600)`
            to = `var(--chakra-colors-${colorScheme}-800)`
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