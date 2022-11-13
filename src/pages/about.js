import Arrow from "public/icons/arrow.svg";
import Layout from "src/components/layout";
import ImageDrag from "src/components/imagedrag";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import StackedImages from "src/components/stacked_images";
import Image from "next/image";
import Intro from "src/components/intro2";
import Experiences from "src/components/experiences";

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

      <section className="section--default">
        <div className="relative grid grid-cols-24 gap-y-4/24 md:gap-y-0 md:gap-x-2.5 pt-2/24">
          <div className="order-2 md:order-1 col-start-3 col-end-23 md:col-start-4 md:col-end-20">
            <div className="js-reveal-parent">
              <div className="block mb-6 js-reveal-child" >
                <div className="inline">
                  <div className="inline-flex pb-3 items-center tagline transform -translate-y-2">
                    <span className="inline-block text-sm font-bold uppercase md:text-lg text-secondary font-FivoSansModern">
                      Interactive Front-end developer
                    </span>
                    <span className="inline-block mx-4 rounded-full shrink-0 md:mx-8 bg-secondary w-3.5 h-3.5 md:w-7 md:h-7 transform -translate-y-0.5"></span>
                  </div>
                  <div className=" uppercase">
                    <span className="heading heading--3 work--heading">
                      I'm Khalid Eddib, a web developer . I like to resolve
                      <span className="inline-block relative pb-2 px-2 text-white -rotate-1 bg-secondary">
                        design
                      </span>
                      problems, create smart user interfaces and imagine useful interactions and developing rich web experiences.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full text-base md:text--lg md:w-2/5 wysiwyg js-reveal-child" >
                <p>Pretty intresting, right? I am currently attending 1337 (42 Network) as a software engineering student and I had the chance to aquire some professonal experience at web developement too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section--default">
        <div className="flex justify-center md:justify-end md:mr-[12.5vw]">
          <div className="w-full md:w-[58.33333333vw] lg:w-[45.83333333vw]">
            <div className="relative w-full pb-[150%] md:pb-[80%]">
              <ImageDrag img={10} className='draggable-position' name="work" />
              <ImageDrag img={10} className='draggable-position2' name="connect" />
            </div>
          </div>
        </div>
      </section>
      <Experiences experiences={experiences} />
      <section className="section--default pt-[12.5vw] md:pt-[8.33333333vw]">
        <div className="relative grid grid-cols-24">
          <div className="relative z-10 w-full pb-[52%] col-start-2 col-end-24 ">
            <StackedImages images={[1, 2, 1, 3]} full={true} />
          </div>
        </div>
      </section>
      <section className="section--default pt-[12.5vw] md:pt-[16.66666667vw] pb-[8.33333333vw]">
        <div className="grid grid-cols-24 gap-x-2.5">
          <div className="col-start-4 col-end-23">
            <Number>04</Number>
            <div>
              <Title2 className="w-[37.5vw] md:w-[25vw] lg:w-[20.83333333vw]">
                Want to see more?
              </Title2>
            </div>
          </div>
          <div className="order-2 col-start-3 md:order-1 col-end-23 md:col-start-4 md:col-end-12 md:z-10">
            <div className="relative w-full cursor-pointer pb-[100%] transform md:translate-x-12 md:translate-y-20 -rotate-[10deg] border">
              <div className='absolute inset-0 z-10 w-full h-full border border-black overflow-hidden'>
                {/* <Image src={image1} alt="test" /> */}
              </div>
              <div className="absolute z-30 flex items-center justify-center w-full h-full">
              </div>
            </div>
          </div>
          <div className="z-10 order-1 col-start-3 pt-16 md:pt-0 col-end-23 md:col-start-13 md:col-end-21 md:z-0">
            <div className="relative w-full cursor-pointer pb-[100%] transform md:-translate-y-4 rotate-[10deg]">
              <div className='absolute inset-0 z-10 w-full h-full border border-black overflow-hidden'>
                {/* <Image src={image1} alt="test" /> */}
              </div>
              <div className="absolute z-30 flex items-center justify-center w-full h-full">
                <div className="flex justify-center w-screen overflow-hidden flex-nowrap marquee bg-transparent text-tertiary dark:text-tertiary-dark">
                  <div className="z-10 flex items-center js-marquee-text shrink-0">
                    <div className="flex items-center shrink-0 z-10 px-5 pt-4 pb-2.5">
                      <span className="px-4 font-bold text-center marquee__text !uppercase heading heading--4">View work</span>
                    </div>
                    <div className="relative shrink-0 w-6 h-6 transfrom -rotate-45 text-transparent">
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
