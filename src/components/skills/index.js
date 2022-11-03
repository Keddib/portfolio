import { useEffect } from "react";
import { gsap } from "src/services/gasp";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import Title4 from "../title4";

export default function Skills() {


  useEffect(() => {
    let ctx = gsap.context(() => {

    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }
  }, [])

  return (
    <section className="section--default">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-3 col-end-25 md:col-start-3 md:col-end-23">
          <div className="flex flex-col md:flex-row gap-4">
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
        <div className="col-start-3 col-end-25 md:col-end-23 border mt-8 md:mt-10 lg:mt-12">
          <div className="">

          </div>
        </div>
      </div>
    </section>
  );
}
