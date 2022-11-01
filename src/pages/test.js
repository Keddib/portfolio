import About from "src/components/about";
import Layout from "src/components/layout";
import Intro from "src/components/intro";
import Skills from "src/components/skills";



export default function Test() {

  return (
    <Layout home="Keddib - Home">
      <div className='border'>
        <Intro />
        <About />
        <Skills />
      </div>
    </Layout>
  );
}
