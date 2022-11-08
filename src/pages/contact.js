import TechsBack from "public/icons/techs_back.svg";
import { useEffect } from "react";
import { gsap } from "src/services/gasp";
import Layout from "src/components/layout";

export default function Conatct() {

  // useAnimationOnScroll("#contact__text");

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.from("#contact__text", { opacity: 0, yPercent: 100, duration: 1 })
    });

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <Layout home="Keddib - About">
      <section className="py-[41.66666667vw] md:py-[16.66666667vw]">
        <div id="contact__text" className="relative grid grid-cols-24 gap-x-2.5">
          <div className="z-10 col-start-3 col-end-23 md:col-start-4 md:col-end-18 lg:col-end-13">
            <div className="grid grid-cols-2 gap-x-[4.16666667vw] gap-y-[12.5vw] md:gap-y-[4.16666667vw]">
              <div className="col-span-2 md:col-span-1">
                <span className="block text--label">01</span>
                <h2 className="pt-4 heading heading--4">Location</h2>
                <div className="pt-4 md:pt-6">
                  <p className="font-bold">Morocco</p>
                  <p>Lot 660, Hay Moulay Rachid</p>
                  <p>43150, Ben Guerir</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block mb-4 text--label">02</span>
                <h2 className="heading heading--4">Reach out</h2>
                <div className="inline-block pt-4 md:pt-6">
                  <ul>
                    <li className="flex w-full ">
                      <p className="w-16 font-bold">email</p>
                      <a href="mailto:keddib.codes@gmail.com" className="pl-6">keddib.codes@gmail.com</a>
                    </li>
                    <li className="flex w-full ">
                      <p className="w-16 font-bold">mobile</p>
                      <a href="tel:+212 648 42 83 19" className="pl-6">+212 648 42 83 19 </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-3 md:order-2">
                <span className="block mb-4 text--label">03</span>
                <h2 className=" heading heading--4">Follow us</h2>
                <div className="inline-flex pt-4 space-x-4 md:pt-6">
                  <a target="_blank" rel="noreferrer noopener" className="group relative flex flex-col overflow-hidden text-xs font-heavy uppercase cursor-pointer" href="https://www.linkedin.com/in/keddib/">
                    <div className="relative z-10 text-tertiary dark:text-tertiary-dark border-b-2 border-b-tertiary dark:border-b-tertiary-dark transition-all group-hover:bg-tertiary dark:group-hover:bg-tertiary-dark group-hover:text-primary-dark dark:group-hover:text-primary">
                      <span className="block py-1">linkedin</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full col-start-11 pt-12 col-end-25 md:pt-0">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                <i className="w-20">
                  <TechsBack />
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
