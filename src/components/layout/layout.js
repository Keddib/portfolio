import { useEffect, useState } from 'react';
import Head from 'next/head';
import Dashboard from 'src/components/dashborad';

export default function Layout({ children, home }) {

  const [darkMode, setDarkMode] = useState(false);


  function setDarkTheme(value) {
    setDarkMode(value);
    localStorage.setItem('dark', value);
  }

  useEffect(() => {
    console.log()
    const dark = localStorage.getItem('dark');
    if (dark && dark == 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  return (
    <div className={`font-BeVietnam ${darkMode && 'dark'}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio of a web developer"
        />
        <meta name="og:title" content={home} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{home}</title>
      </Head>
      <main className="h-screen bg-background dark:bg-background-dark text-primary dark:text-primary-dark">
        <header className='py-3 px-5 flex justify-between items-center fixed w-full'>
          <div className='bg-red-500'>logo</div>
          <Dashboard setDarkTheme={setDarkTheme} darkMode={darkMode} />
        </header>
        {children}
        <footer className='border border-pink-600 flex justify-around'>
          <div className='bg-gray-600'>signture</div>
          <div className='bg-gray-600'>linkedin</div>
          <div className='bg-gray-600'>github</div>
        </footer>
      </main>
    </div>
  );
}
