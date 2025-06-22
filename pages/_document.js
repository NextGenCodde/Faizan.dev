import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta content="black" name="theme-color" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            onload="this.onload=null;this.rel='stylesheet'"
            rel="stylesheet preload prefetch"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
            onload="this.onload=null;this.rel='stylesheet'"
            rel="stylesheet preload prefetch"
          />
          <link rel="icon" href="/favicon.ico"  />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
