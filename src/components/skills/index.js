import TechsBack from "public/icons/techs_back.svg";
import TechsFront from "public/icons/techs_front.svg";
import Number from "src/components/number";
import Title4 from "src/components/title4";
import useAnimationOnScroll from "src/hooks/useOnScroll";
import MovingText from "src/components/moving_text";

export default function Skills() {

  useAnimationOnScroll('#skills__text')

  return (
    <section className="section--default">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-3 col-end-25 md:col-start-3 md:col-end-23">
          <div id="skills__text" className=" relative flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <Number>02</Number>
              <Title4>
                Skills I've learned
              </Title4>
            </div>
            <div className="pt-4 md:pt-11 w-[75vw] lg:w-1/2">
              <p className="paragraph">
                My interest in web development started back in 2019 when I decided
                to create a digital media player, turns out hacking together a
                custom play button taught me a lot about HTML & CSS!
              </p>
              <div className="flex justify-start pt-6" >
                <div className=" relative flex flex-col overflow-hidden text-sm font-heavy uppercase">
                  <div className="relative z-10 text-tertiary dark:text-tertiary-dark">
                    <span className="block px-1 underline hover:bg-tertiary dark:hover:bg-tertiary-dark hover:text-background dark:hover:text-background-dark hover:no-underline">
                      technologies I've worked with
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative flex justify-end w-full overflow-hidden ">
          <div className="relative flex flex-col items-stretch h-auto w-[66.66666667vw] md:w-[58.33333333vw]">
            <span className="block overflow-hidden bg-none relative">
              <span className="pt-[69.9873896595208%] block bg-none"></span>
              <TechsBack className="absolute top-0 left-0 right-0 bottom-0 max-w-full min-w-full max-h-full min-h-full object-fill" />
            </span>
          </div>

          <MovingText> react js. node js. c++. docker. javascript. html. css.</MovingText>

          <div className="absolute flex flex-col items-stretch top-0 right-0 z-20 h-full w-[66.66666667vw] md:w-[58.33333333vw]  ">
            <span className="block overflow-hidden bg-none relative w-full h-full ">
              <span className="pt-[69.9873896595208%] block bg-none "></span>
              <TechsFront className="absolute top-0 left-0 right-0 bottom-0 max-w-full min-w-full max-h-full min-h-full object-fill" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
