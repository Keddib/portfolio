import Arrow from "public/icons/arrow.svg"
// import Img2 from "public/images/1R5A0016.JPG";
// import Img1 from "public/images/1R5A0058.JPG";
// import image3 from "public/images/1R5A0104.JPG"
// import image2 from "public/images/1R5A0059.JPG"
// import image1 from "public/images/1R5A9972.JPG"
import Layout from "src/components/layout";
import MovingText from "src/components/moving_text";
import ImageDrag from "src/components/imagedrag";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import StackedImages from "src/components/stacked_images";
import Image from "next/image";
import Button from "src/components/button";
import Intro from "src/components/intro2";

export default function Work() {
  return (
    <Layout home="Keddib - Work">
      <Intro>
        WORK <span className="text-9xl"> . </span>
        WORK <span className="text-9xl"> . </span>
        WORK <span className="text-9xl"> . </span>
      </Intro>
      <section className="section--default">
        <div className="grid grid-cols-24 gap-x-2.5">
          <div className="col-start-3 col-end-23 md:col-start-4 md:col-end-14 lg:col-end-11">
            <Number>01</Number>
            <div>
              <Title2 className="w-[37.5vw] md:w-[25vw] lg:w-[20.83333333vw]">
                Project Name
              </Title2>
            </div>
          </div>
          <div className="col-start-3 col-end-23 md:col-start-2 md:col-end-24">
            <ul className="flex flex-col pt-10 md:pt-16 space-y-3/24">

              <li className="w-full case">
                <div className="w-[66.66666667vw] md:w-[25vw]">
                  <h2 className="heading heading--4">30+ websites and job boards </h2>
                </div>
                <div className="relative w-full pb-[56.25%] mt-[3.75rem] bg-secondary border border-red">
                  {/* <Image className="object-cover" src={Img2} alt="project case" fill /> */}
                </div>
                <div className="flex flex-col w-full md:flex-row pt-[3.75rem]">
                  <div className="w-[66.66666667vw] md:w-[25vw]">
                    <h2 className="heading heading--4">30+ websites and job boards </h2>
                  </div>
                  <div className="pt-5 md:pl-8 md:pt-0">
                    <div className="w-[79.16666667vw] md:w-[25vw]">
                      <p className="paragraph">
                        We connect everyone everywhere to the many jobs through our network of international job-search websites like
                      </p>
                    </div>
                    <Button>
                      CHECK code source
                    </Button>
                  </div>
                </div>
              </li>

            </ul>
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
