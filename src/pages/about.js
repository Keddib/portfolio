import Arrow from "public/icons/arrow.svg"
import PatternFront from "public/icons/pattern_front.svg"
import PatternBack from "public/icons/pattern_back.svg"
import Img2 from "public/images/1R5A0016.JPG";
import Img1 from "public/images/1R5A0058.JPG";
import image3 from "public/images/1R5A0104.JPG"
import image2 from "public/images/1R5A0059.JPG"
import image1 from "public/images/1R5A9972.JPG"
import Layout from "src/components/layout";
import MovingText from "src/components/moving_text";
import ImageDrag from "src/components/imagedrag";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import StackedImages from "src/components/stacked_images";
import Image from "next/image";

export default function About() {
  return (
    <Layout home="Keddib - About">
      <section className="relative section--default -md:pt-[33vw]">
        <div className="relative flex justify-start w-full">
          <div className="relative h-auto w-[66.66666667vw] my-[4.16666667vw] md:w-[58.33333333vw]" >
            <span className="block overflow-hidden bg-none relative">
              <span className="pt-[69.9873896595208%] block bg-none"></span>
              <PatternBack className="absolute top-0 left-0 right-0 bottom-0 max-w-full min-w-full max-h-full min-h-full object-fill" />
            </span>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full heading heading--0 z-10">
            <MovingText>
              ABOUT ME <span className="text-9xl"> . </span>
              ABOUT ME .
            </MovingText>
          </div>
          <div className="absolute top-0 left-0 my-[4.16666667vw] z-20 h-auto w-[66.66666667vw] md:w-[58.33333333vw]" >
            <span className="block overflow-hidden bg-none relative w-full h-full ">
              <span className="pt-[69.9873896595208%] block bg-none "></span>
              <PatternFront className="absolute top-0 left-0 right-0 bottom-0 max-w-full min-w-full max-h-full min-h-full object-fill" />
            </span>
          </div>
        </div>
      </section>
      <section className="section--default">
        <div className="relative grid grid-cols-24 gap-y-4/24 md:gap-y-0 md:gap-x-2.5 pt-2/24">
          <div className="order-2 md:order-1 col-start-3 col-end-23 md:col-start-4 md:col-end-20">
            <div className="js-reveal-parent">
              <div className="block mb-6 js-reveal-child" >
                <div className="inline">
                  <div className="flex pb-3 items-center tagline transform -translate-y-2">
                    <span className="inline-block text-sm font-bold uppercase md:text-lg text-secondary font-FivoSansModern">
                      CONNECTING EVERYONE EVERYWHERE TO WORK
                    </span>
                    <span className="inline-block mx-4 rounded-full shrink-0 md:mx-8 bg-secondary w-3.5 h-3.5 md:w-7 md:h-7 transform -translate-y-0.5"></span>                  </div>
                  <div className="inline uppercase wysiwyg wysiwyg--lg">
                    <span className="heading heading--3 work--heading">
                      Work empowers people. To grow, become more
                      <span className="inline-block relative pb-2 px-2 text-white -rotate-1 bg-secondary">
                        independent,
                      </span>
                      and create a better future for themselves and others.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full text-base md:text--lg md:w-2/5 wysiwyg js-reveal-child" >
                <p>Pretty important, right? That’s why we aim to give everyone easy access to work. Through cutting-edge tech, that always puts people first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section--default">
        <div className="flex justify-center md:justify-end md:mr-[12.5vw]">
          <div className="w-full md:w-[58.33333333vw] lg:w-[45.83333333vw]">
            <div className="relative w-full pb-[150%] md:pb-[80%]">
              <ImageDrag img={Img1} className='draggable-position' name="work" />
              <ImageDrag img={Img2} className='draggable-position2' name="connect" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative section--default">
        <div className="grid grid-cols-24 gap-x-2.5">
          <div className="col-start-3 col-end-23 z-50 md:col-start-8 lg:col-start-10 md:col-end-22 pt-[8.33333333vw]">
            <div className="flex flex-col space-y-20">

              <div className="js-reveal-parent">
                <Number>01</Number>
                <div className="flex flex-col justify-between md:flex-row">
                  <Title2 className="w-full md:w-[20.83333333vw] lg:w-[16.66666667vw]">
                    Shaking things up since forever
                  </Title2>
                  <div className="w-full md:pl-2 md:w-[33.33333333vw] lg:w-[29.16666667vw]" >
                    <p className="paragraph">About twenty years ago, our digital approach to making work work changed the face of our industry. Since then, our tech teams have been steadily evolving. Creating the foundations for a new wave of digital work innovations.</p>
                  </div>
                </div>
              </div>
              <div className="js-reveal-parent">
                <Number>01</Number>
                <div className="flex flex-col justify-between md:flex-row">
                  <Title2 className="w-full md:w-[20.83333333vw] lg:w-[16.66666667vw]">
                    Shaking things up since forever
                  </Title2>
                  <div className="w-full md:pl-2 md:w-[33.33333333vw] lg:w-[29.16666667vw]" >
                    <p className="paragraph">About twenty years ago, our digital approach to making work work changed the face of our industry. Since then, our tech teams have been steadily evolving. Creating the foundations for a new wave of digital work innovations.</p>
                  </div>
                </div>
              </div>
              <div className="js-reveal-parent">
                <Number>01</Number>
                <div className="flex flex-col justify-between md:flex-row">
                  <Title2 className="w-full md:w-[20.83333333vw] lg:w-[16.66666667vw]">
                    Shaking things up since forever
                  </Title2>
                  <div className="w-full md:pl-2 md:w-[33.33333333vw] lg:w-[29.16666667vw]" >
                    <p className="paragraph">About twenty years ago, our digital approach to making work work changed the face of our industry. Since then, our tech teams have been steadily evolving. Creating the foundations for a new wave of digital work innovations.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="section--default pt-[12.5vw] md:pt-[8.33333333vw]">
        <div className="relative grid grid-cols-24">
          <div className="relative z-10 w-full pb-[52%] col-start-2 col-end-24 ">
            <StackedImages images={[image3, image2, image1]} full={false} />
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
                <Image src={image1} alt="test" />
              </div>
              <div className="absolute z-30 flex items-center justify-center w-full h-full">
              </div>
            </div>
          </div>
          <div className="z-10 order-1 col-start-3 pt-16 md:pt-0 col-end-23 md:col-start-13 md:col-end-21 md:z-0">
            <div className="relative w-full cursor-pointer pb-[100%] transform md:-translate-y-4 rotate-[10deg]">
              <div className='absolute inset-0 z-10 w-full h-full border border-black overflow-hidden'>
                <Image src={image1} alt="test" />
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
