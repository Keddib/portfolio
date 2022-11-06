import { useEffect, useRef } from "react";
import { gsap, Linear } from "src/services/gasp";
import Number from "src/components/number";
import Asterisk from "src/components/asterisk";

export default function Intro() {

  const miniRef = useRef(null);
  const titleRef = useRef(null);
  const mainRef = useRef(null);
  const asteriskRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const tl = gsap.timeline();

      const elems = [...miniRef.current.children];
      const words = [...titleRef.current.children];

      let animations = elems.map(child => {
        return gsap.from(child, { duration: 0.4, yPercent: 100 });
      });

      animations.forEach((anim) => {
        tl.add(anim, "<30%");
      });

      animations = words.map(child => {
        return gsap.from(child.children, { duration: 0.4, yPercent: 100 });
      });
      animations.forEach((anim) => {
        tl.add(anim, "<30%");
      })

      tl.from(mainRef.current, { duration: 0.4, yPercent: 10, scaleY: 0, display: 'none' }, "<30%");
      tl.to(mainRef.current, { duration: 0.4, rotate: '-2deg', }, "<30%");
      tl.from(asteriskRef.current, { duration: 0.5, scale: 0, rotation: "-360" },);
      tl.to(asteriskRef.current, { duration: 2, rotation: "360", ease: Linear.easeOut, repeat: -1 });



    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }
  }, [])

  return (
    <section className="relative mt-32 section--default pt-[16.66666667vw] md:mt-[12.5vw] md:pt-[4.16666667vw]">
      <div className="grid grid-cols-24 gap-x-2.5 ">
        <div className="col-start-3 col-end-23 xl:col-start-3 xl:col-end-19">
          <div className="w-full ">
            <Number>
              <span ref={miniRef} className=" relative text-left overflow-hidden inline-block">
                <span className="inline-block relative mr-2">hi,</span>
                <span className="inline-block relative mr-2">my</span>
                <span className="inline-block relative mr-2">name</span>
                <span className="inline-block relative mr-2">is</span>
              </span>
            </Number>

            <div className="relative pt-8">
              <div className="heading--1 uppercase font-FivoSansModern font-bold text-[3rem] md:text-[5.75rem] lg:text-[8rem]">
                <div ref={mainRef} className="absolute z-20 inline-block transform origin-center text-background dark:text-background-dark">
                  <div className="absolute bottom-0 z-0 bg-tertiary dark:bg-tertiary-dark -top-3 -right-3 -left-3 -sm:-top-2 -sm:-right-2 -sm:-left-2 md:-top-4 md:-left-5 md:-right-6"></div>
                  <div className="overflow-hidden">
                    <span className="relative block text-background dark:text-background-dark">khalid</span>
                  </div>
                  <Asterisk elmRef={asteriskRef} />
                </div>
                <h1 ref={titleRef} className="relative z-10">
                  <div className="text-left overflow-hidden inline-block">
                    <span className="inline-block">
                      <div className="inline-block mr-4 md:mr-10">khalid ,</div>
                    </span>
                  </div>
                  <div className="text-left overflow-hidden inline-block">
                    <div className="inline-block mr-4 md:mr-10">The</div>
                  </div> <br />
                  <div className="text-left overflow-hidden inline-block">
                    <div className="inline-block mr-4 md:mr-10">web is</div>
                  </div>
                  <div className="text-left overflow-hidden inline-block">
                    <div className="inline-block">my</div>
                  </div> <br />
                  <div className="text-left overflow-hidden">
                    <div className="inline-block">arena</div>
                  </div>
                </h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
