import Logo from "public/icons/logo.svg";
import { useEffect, useRef } from "react";
import { gsap } from "src/services/gasp";


export default function Footer() {

  const elemRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elemRef.current,
          start: "30% bottom",
        }
      });
      const sections = [...elemRef.current.children];
      const animations = sections.map((sec) => {
        return gsap.from(sec, {
          duration: 1,
          yPercent: 100,
          opacity: 0,
        });
      });
      animations.forEach((anim) => {
        tl.add(anim, "<30%");
      })
    });

    '#footer__animated'
    return () => {
      ctx.revert();
    }
  }, []);


  return (
    <footer className="relative pt-[16.66666667vw]">
      <div ref={elemRef} className="items-end grid grid-cols-24 gap-x-2.5">
        <div className="hidden col-start-3 lg:block col-end-14 md:col-end-10 lg:col-end-8 relative">
          <div className="flex flex-col">
            <div className="relative">
              <div className="uppercase heading heading--4">
                <div className="relative inline-block transform -rotate-2 mr-2 text-background dark:text-background-dark text--highlighted after:bg-tertiary dark:after:bg-tertiary-dark">
                  <span className="uppercase">Khalid</span>
                </div>
                <span className="uppercase">,The web is my arena</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col-start-11 lg:block col-end-23 text-primary dark:text-primary-dark relative">
          <div className="flex justify-between">
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">Contact me</p>
              <a href="mailto:keddib.codes@gmail.com" className="pt-1 font-medium  text-lg text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark ">keddib.codes@gmail.com</a>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">Follow me</p>
              <div className="flex pt-1">
                <a href="https://www.linkedin.com/in/keddib/" className="text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark  font-medium  text-lg" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">github</p>
              <a href="https://www.github.com/keddib" className="pt-1 font-medium  text-lg text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark " target="_blank" rel="noopener noreferrer">Keddib</a>
            </div>
          </div>
        </div>
        <div className="block col-start-3 lg:hidden col-end-23 relative">
          <div className="flex flex-col gap-y-9">
            <div className="flex justify-between sm:justify-start">
              <div className="flex flex-col" >
                <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">github</p>
                <a href="https://www.github.com/keddib" className="pt-1 font-medium text-lg hover:text-tertiary dark:hover:text-tertiary-dark" target="_blank" rel="noopener noreferrer">keddib</a></div></div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">Follow me</p>
              <div className="flex pt-1">
                <a className="font-medium text-lg hover:text-tertiary dark:hover:text-tertiary-dark" href="https://www.linkedin.com/in/keddib/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">Contact me</p>
              <a href="mailto:keddib.codes@gmail.com" className="pt-1 font-medium text-lg hover:text-tertiary dark:hover:text-tertiary-dark">keddib.codes@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-primary dark:border-primary-dark grid grid-cols-24 gap-x-2.5 mt-[16.66666667vw] md:mt-[8.33333333vw]">
        <div className="col-start-3 md:col-start-2 col-end-23">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="font-medium uppercase text-xxs">© Keddib, 2022</p>
            <div>
              <div className="pointer-events-none w-12 my-2">
                <Logo className="w-full h-full fill-primary dark:fill-primary-dark logo-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
