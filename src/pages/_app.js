import { ChakraProvider } from '@chakra-ui/react'
import '../styles/index.css'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
