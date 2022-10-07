import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import { useEffect } from 'react';


export default function FirstPost() {

  useEffect(() => {
    console.log('init first post')
  }, [])

  return (<Layout home={false}>
    <Head>
      <title>first post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </Layout>);
}
