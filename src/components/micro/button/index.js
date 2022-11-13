import { useRef, useEffect } from "react";
import { gsap } from "src/services/gasp";

export default function Button({ children, className, action }) {

  const textRef = useRef(null);
  const tl = useRef(null);

  function onEnter() {
    tl.current.play();
  }
  function onLeave() {
    tl.current.pause();
  }


  useEffect(() => {

    const cxt = gsap.context(() => {

      tl.current = gsap.timeline({ repeat: -1, paused: true });
      tl.current.fromTo(textRef.current.children, {
        translate: "0% 0%",
        duration: 1.5,
        ease: 'none',
      },
        {
          translate: "-100% 0%",
          duration: 1.5,
          ease: 'none',
        }
      );
    });

    return () => {
      cxt.revert();
    }
  }, []);

  return (

    <div className="">
      <button onClick={action}>
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={`${className} inline-flex relative px-5 py-4 text-xs font-black uppercase font-display bg-tertiary dark:bg-tertiary-dark md:text-sm cursor-pointer`}>
          <span className="relative z-10 text-background dark:text-background-dark">{children}</span>
          <div className="absolute inset-0 flex items-center z-20 bg-tertiary dark:bg-tertiary-dark text-background dark:text-background-dark">
            <div ref={textRef} className="flex w-screen overflow-hidden flex-nowrap marquee">
              <div className="flex items-center shrink-0 z-10 px-5 py-4">
                <span className="">{children}</span>
              </div>
              <div className="flex items-center shrink-0 z-10 px-5 py-4">
                <span className="">{children}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>

  );
}
