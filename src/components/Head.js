import React from 'react';
import Head from 'next/head';
import meta from '../data/meta.json';

const PicRollHead = ({title}) => {
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

        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default PicRollHead