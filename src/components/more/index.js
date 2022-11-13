import Arrow from "public/icons/arrow.svg";
import Number from "src/components/micro/number";
import Title2 from "src/components/micro/title2";

export default function More({ number }) {
  return (
    <section className="section--default pt-[12.5vw] md:pt-[16.66666667vw] pb-[8.33333333vw]">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-4 col-end-23">
          <Number>{number}</Number>
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
  );
}
