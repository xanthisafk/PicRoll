import { extendTheme } from "@chakra-ui/react";

/**
 * Creates a custom Chakra UI theme with a dark color mode by default and with system color mode enabled.
 * @returns {object} The custom Chakra UI theme object.
 */
const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    }
});

export default theme;
