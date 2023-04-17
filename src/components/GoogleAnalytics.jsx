import Script from "next/script";

const GoogleAnalytics = () => {
    const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_GTAG_MEASUREMENT_ID;
    if (!MEASUREMENT_ID) { return <></>} 
    return (
        <>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
        </>
    )
}

export default GoogleAnalytics