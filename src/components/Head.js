import React from 'react';
import Head from 'next/head';
import meta from '../data/meta.json';
import NextScript from 'next/script';
import { useToken } from '@chakra-ui/react';

const PicRollHead = ({title, colorScheme}) => {
  const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_GTAG_MEASUREMENT_ID;

  const [themeColor] = useToken('colors', [`${colorScheme}.400`]);

  return (
    <Head>
        <title>{title ?? meta.title}</title>
        <meta name="description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta name="keywords" content={meta.keywords.replace("%%APPNAME%%", meta.title)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="icons/icon-512x512.png"></link>

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta property="og:image" content="/logo_hq.png" />
        <meta property="og:url" content="https://picroll.vercel.app" />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description.replace("%%APPNAME%%", meta.title)} />
        <meta name="twitter:image" content="/logo_hq.png" />
        <meta name="twitter:card" content="/logo_hq.png" />

        <meta name="theme-color" content={themeColor} />

        <link rel="icon" href="/logo_small.svg" />
        <NextScript
          id={"google-analytics"}
          src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${MEASUREMENT_ID});
          `}
        </NextScript>
        
      </Head>
  )
}

export default PicRollHead