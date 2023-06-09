import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  const googleFont = 'Roboto Mono'

  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {googleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${googleFont?.replace(
              ' ',
              '+'
            )}&display=swap`}
            rel='stylesheet'
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
