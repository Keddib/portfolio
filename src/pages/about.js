import Layout from "src/components/layout";
import Intro from "src/components/micro/patterns";
import Introduction from "src/components/about/intro";
import Experiences from "src/components/about/experiences";
import Me from "src/components/about/me";
import Catalog from "src/components/about/cataloge";
import More from "src/components/micro/more";
import { experiences } from "src/data";

export default function About() {
  return (
    <Layout home="Keddib - About">

      <Intro>
        ABOUT ME
        <span className="text-9xl"> . </span>
        ABOUT ME
        <span className="text-9xl"> . </span>
      </Intro>

      <Introduction />

      <Me />

      <Experiences experiences={experiences} />

      <Catalog />

      <More number={4} images={[0, 1]} calls={["view work", "contact me"]} />

    </Layout>
  );
}
