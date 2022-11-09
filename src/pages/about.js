import PatternFront from "public/icons/pattern_front.svg"
import PatternBack from "public/icons/pattern_back.svg"
import Layout from "src/components/layout";
import MovingText from "src/components/moving_text";

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
      <section className="section--default border">
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
    </Layout>
  );
}
