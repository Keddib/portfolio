import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-BeVietnam bg-background dark:bg-background-dark text-primary dark:text-primary-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
