import Head from 'next/head';
import Layout from 'src/components/layout/layout';

export default function Home() {
  return (
    <Layout home="Keddib - Home">
      <div className='border border-red'>
        <div className=''>
          hello
        </div>
      </div>
    </Layout>
  );
}
