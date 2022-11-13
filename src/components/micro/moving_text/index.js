import { useRef, useEffect } from "react";
import { gsap } from "src/services/gasp";

export default function MovingText({ children, className }) {

  const textRef = useRef(null);
  const textWrraper = useRef(null);


  useEffect(() => {

    const cxt = gsap.context(() => {

      gsap.from(textWrraper.current, {
        top: "70%",
        duration: 2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "30% bottom",
        }
      });

      const tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(textRef.current.children, {
        translate: "0% 0%",
        duration: 20,
        ease: 'none',
      },
        {
          translate: "-100% 0%",
          duration: 20,
          ease: 'none',
        }
      );
    });

    return () => {
      cxt.revert();
    }
  }, []);

  return (
    <div ref={textWrraper} className={`${className} inline-flex absolute heading uppercase w-full text-[4rem] md:text-[6rem] lg:text-[9.75rem]`}>
      <div className="absolute inset-0 flex items-center z-20">
        <div ref={textRef} className="flex w-screen overflow-hidden flex-nowrap marquee">
          <div className="flex items-center shrink-0 z-10 px-10">
            <span className=""> {children} </span>
          </div>
          <div className="flex items-center shrink-0 z-10 px-10">
            <span className=""> {children} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
