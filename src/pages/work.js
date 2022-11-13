import Layout from "src/components/layout";
import Intro from "src/components/micro/patterns";
import Projects from "src/components/work/projects";
import More from "src/components/micro/more";

export default function Work() {
  return (
    <Layout home="Keddib - Work">
      <Intro>
        WORK <span className="text-9xl"> . </span>
        WORK <span className="text-9xl"> . </span>
        WORK <span className="text-9xl"> . </span>
      </Intro>
      <Projects />
      <More number={4} images={[0, 1]} calls={["view work", "contact me"]} />
    </Layout>
  );
}
