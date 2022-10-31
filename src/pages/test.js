import About from "src/components/about";
import Layout from "src/components/layout";
import Title from "src/components/Title";



export default function Test() {

  return (
    <Layout home="Keddib - Home">
      <div className='border'>
        <Title />
        <About />
      </div>
    </Layout>
  );
}
