import About from "src/components/about";
import Layout from "src/components/layout";
import Intro from "src/components/intro";
import Skills from "src/components/skills";



export default function Home() {

  return (
    <Layout home="Keddib - Home">
      <div >
        <Intro />
        <About />
        <Skills />
      </div>
    </Layout>
  );
}
