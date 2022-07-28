import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
        <Component {...pageProps} />
      </>
      )
  }