import { useRef, useEffect } from "react";
import { gsap } from "src/services/gasp";

export default function MovingText({ children }) {

  const textRef = useRef(null);


  useEffect(() => {

    const cxt = gsap.context(() => {

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
    <div className="inline-flex absolute top-[21%] heading uppercase w-full text-[4rem] md:text-[6rem] lg:text-[9.75rem]">
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
