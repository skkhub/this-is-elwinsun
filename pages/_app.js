import '../styles/index.scss';
import Script from 'next/script';
import Head from 'next/head';

/*
import * as Sentry from '@sentry/react';
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://38a5d560a1844b92b5a6baafdb624dde@o1341041.ingest.sentry.io/6614148", // react 触发不存在的onClick会报错
    // dsn: "https://0fd71f7ac70b45a5a10fc72914e8a8e5@o1341041.ingest.sentry.io/6614149", // js 执行不存在的func会报错
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
*/

export default function MyApp({ Component, pageProps }) {
    return ( <>
        <Head>
            <title>Elwin Sun&apos;s Personal Website</title>
        </Head>
        {/* <Script id="baidutj">
            {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?f0366c8fdf43c80584172bdebc63f554";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `}
        </Script> */}
        <Script strategy='worker' src='https://hm.baidu.com/hm.js?f0366c8fdf43c80584172bdebc63f554'/>
        <Component {...pageProps} />
    </>
  )
  }