import PatternBack from "public/icons/pattern_back.svg"
import PatternFront from "public/icons/pattern_front.svg"
import MovingText from "src/components/moving_text";

export default function Intro({ children }) {
  return (

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
            {children}
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
  );
}
