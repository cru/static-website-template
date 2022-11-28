import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
