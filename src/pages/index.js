import About from "src/components/main/about";
import Layout from "src/components/layout";
import Intro from "src/components/main/intro";
import Skills from "src/components/main/skills";
import Work from "src/components/main/work";

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
