import Head from 'next/head';
import Layout from 'components/layout/layout';
import Loading from 'components/loading';
import NavBar from 'components/navbar';

export default function Home() {
  return (
    <Layout home="keddib">
      <Loading />
      {/* <div>
      </div> */}
    </Layout>
  );
}
