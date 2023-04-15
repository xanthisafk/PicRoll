import { ChakraProvider } from '@chakra-ui/react';
import '../styles/index.css';
import '@fontsource/league-spartan';
import "@fontsource/aileron";
import "@fontsource/fasthand";


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
