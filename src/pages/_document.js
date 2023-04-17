import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      
      <body className='text-font'>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
