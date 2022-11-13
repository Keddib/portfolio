import Layout from "src/components/layout";
import { useRef, useEffect } from "react";
import { gsap, Linear } from "src/services/gasp";
import Number from "src/components/micro/number";
import Button from "src/components/micro/button";

export default function Custom404() {

  const titleRef = useRef(null);
  const miniRef = useRef(null);
  const mainRef = useRef(null);


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
      tl.from(mainRef.current, { duration: 0.4, yPercent: 10, scaleY: 0, display: 'none' });
      tl.to(mainRef.current, { duration: 0.4, rotate: '-2deg', });

    }); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <Layout home="Keddib - 404">
      <section className="relative my-32 section--default pt-[16.66666667vw] md:mt-[12.5vw] md:pt-[4.16666667vw]">
        <div className="grid grid-cols-24 gap-x-2.5 ">
          <div className="col-start-3 col-end-23 ">
            <div>
              <div className="flex justify-center">
                <Number>
                  <span ref={miniRef} className=" relative text-left overflow-hidden inline-block">
                    <span className="inline-block relative mr-2">page</span>
                    <span className="inline-block relative mr-2">not</span>
                    <span className="inline-block relative mr-2">found</span>
                  </span>
                </Number>
              </div>
              <div className="relative pt-8 flex justify-center">
                <div className="heading--1 uppercase font-FivoSansModern font-bold text-[3rem] md:text-[5.75rem] lg:text-[8.75rem]">
                  <div ref={mainRef} className="absolute z-20 inline-block transform origin-center text-background dark:text-background-dark">
                    <div className="absolute bottom-0 z-0 bg-tertiary dark:bg-tertiary-dark -top-3 -right-3 -left-3 -sm:-top-2 -sm:-right-2 -sm:-left-2 md:-top-4 md:-left-5 md:-right-6"></div>
                    <div className="overflow-hidden">
                      <span className="relative block text-background dark:text-background-dark">Error</span>
                    </div>
                  </div>
                  <h1 ref={titleRef} className="relative z-10 error__falling_word">
                    <div className="text-left overflow-hidden inline-block">
                      <span className="inline-block">
                        <div className="inline-block mr-10 md:mr-20">Hello</div>
                      </span>
                    </div>
                    <div className="text-left overflow-hidden inline-block">
                      <div className="inline-block">404</div>
                    </div>
                  </h1>
                </div>
              </div>

            </div>
            <div className="flex justify-center">
              <Button>bring me home</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
