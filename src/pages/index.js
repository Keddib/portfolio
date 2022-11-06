import About from "src/components/about";
import Layout from "src/components/layout";
import Intro from "src/components/intro";
import Skills from "src/components/skills";
import Work from "src/components/work";



export default function Home() {

  return (
    <Layout home="Keddib - Home">
      <Intro />
      <About />
      <Skills />
      <Work />
    </Layout>
  );
}
