import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  })

  return (
    <Html lang="en">
      <Head />
      <body 
      // style={{backgroundImage: 'linear-gradient( 110.1deg,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% );'}}
      >
        <ThemeProvider theme={darkTheme}>
          <Main />
          <NextScript />
        </ThemeProvider>

      </body>
    </Html>
  )
}
