import { useEffect } from "react";
import { gsap } from "src/services/gasp";
import Number from "src/components/number";
import Title2 from "src/components/title2";

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
        <div className="col-start-3 col-end-25 md:col-start-3 md:col-end-17 lg:col-end-13">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-4/5">
              <Number>02</Number>
              <Title2>
                Skills I've learned
              </Title2>
            </div>
            <div className="pt-4 md:pt-11 md:pl-10">
              <p className="paragraph">
                My interest in web development started back in 2019 when I decided
                to create a digital media player, turns out hacking together a
                custom play button taught me a lot about HTML & CSS!
              </p>
              <div className="flex justify-start pt-6" >
                <div className=" relative flex flex-col overflow-hidden text-xs font-extrabold uppercase">
                  <div className="relative z-10 text-tertiary dark:text-tertiary-dark">
                    <span className="block py-1">Here are a few technologies I’ve been working with recently: </span>
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
