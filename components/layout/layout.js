import { useEffect } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children, home }) {


  useEffect(() => {
    console.log('home', home);
  }, [])

  return (
    <div className={styles.container} >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            home,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={home} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{home}</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
