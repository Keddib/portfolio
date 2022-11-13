import Layout from "src/components/layout";
import Intro from "src/components/micro/patterns";
import Introduction from "src/components/about/intro";
import Experiences from "src/components/about/experiences";
import Me from "src/components/about/me";
import Catalog from "src/components/about/cataloge";
import More from "src/components/more";


const experiences = [
  {
    number: "01",
    title: "Full Stack Intern",
    company: "ALPHA10X",
    from: "November 2022",
    to: "Present",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://www.alpha10x.com/"
  },
  {
    number: "02",
    title: "UX/UI Web Integrator",
    company: "CATA",
    from: "Freelance",
    to: "",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://www.getcata.com/"
  },
  {
    number: "03",
    title: "Front End Developer",
    company: "JOODEK",
    from: "November 2020",
    to: "May 2021",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://www.joodek.com/ma"
  }
]

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

      <More />

    </Layout>
  );
}
