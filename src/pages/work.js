import Layout from "src/components/layout";
import Intro from "src/components/micro/patterns";
import Projects from "src/components/work/projects";
import More from "src/components/micro/more";
import { workCalls } from "src/data";

export default function Work() {
  return (
    <Layout home="Keddib - Work">
      <Intro>
        WORK <span className="text-9xl"> . </span>
        PROJECTS <span className="text-9xl"> . </span>
        PASSION <span className="text-9xl"> . </span>
      </Intro>
      <Projects />
      <More number={5} calls={workCalls} />
    </Layout>
  );
}
