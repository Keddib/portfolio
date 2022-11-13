import { useEffect, useState } from 'react';
import Head from 'next/head';
import HintProvider from 'src/components/micro/hint/HintProvider';
import Header from 'src/components/layout/header';
import Footer from 'src/components/layout/footer';

export default function Layout({ children, home }) {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    function setDarkTheme(value) {
      setDarkMode(value);
      localStorage.setItem('dark', value);
    }
    const dark = localStorage.getItem('dark');
    if (dark && dark == 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);


  useEffect(() => {
    const htmlElem = document.documentElement;
    if (darkMode) {
      htmlElem.classList.add('dark');
    } else {
      htmlElem.classList.remove('dark');
    }
  }, [darkMode])

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Personal portfolio of a web developer"
        />
        <meta name="og:title" content={home} />
        <link rel="icon" href="favicon/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="/faviconsafari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{home}</title>
      </Head>
      <div id="main-wrapper" className="relative flex flex-col h-screen bg-background dark:bg-background-dark text-primary dark:text-primary-dark">
        <HintProvider>
          <Header setDarkTheme={setDarkMode} darkMode={darkMode} />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </HintProvider>
      </div>
    </div>
  );
}
