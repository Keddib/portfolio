import Head from 'next/head';
import Layout from 'src/components/layout/layout';

export default function Home() {
  return (
    <Layout home="Keddib - Home">
      <div className='border border-red'>
        <section className='mt-32 section--default pt-4/24 md:mt-3/24 md:pt-1/24 border'>
          <div className='grid grid-cols-24 gap-x-2.5 border border-secondary-dark'>
            <div className='col-start-3 col-end-23 xl:col-end-19  border border-red'>
              content
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
