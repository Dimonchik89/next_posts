import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <meta name="keywords" content="blog,news,ukraine"/>
        <meta name="description" content="News Ukraine"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}