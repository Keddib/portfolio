import Logos from "public/icons/logo.svg";
import { Draggable, gsap } from "src/services/gasp";
import { useEffect, useRef, useState } from "react";


const colors = ['#4f26e9', '#1f1f1f', '#d9f24f', '#FF66FF', '#f2e8de'];

export default function Logo() {

  const [interval, setInt] = useState(null);
  const [isDraging, setIsDraging] = useState(false);
  const spanRef = useRef();
  const parentRef = useRef();

  const onMove = ({ clientX, clientY }) => {
    gsap.to(spanRef.current, { x: clientX - 40, y: clientY - 50, delay: 0.0001, zIndex: 10000 });
  };

  const onEnter = ({ currentTarget }) => {
    const svgEl = currentTarget.getElementsByTagName('svg');
    const it = setInterval(() => {
      gsap.to(svgEl, { duration: 0, fill: colors[Math.floor(Math.random() * 5)] });
    }, 200);
    setInt(it);
  };


  const onLeave = ({ currentTarget }) => {
    clearInterval(interval);
    const svgEl = currentTarget.getElementsByTagName('svg');
    gsap.to(svgEl, { duration: 0, fill: '' });
  };

  useEffect(() => {

    // create our context. This function is invoked immediately and all GSAP
    // animations and Draggable created during the execution of this function
    // get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component

      const onClick = ({ target }) => {
        gsap.to(target, { scale: 1.25, duration: 0 });
        setIsDraging(true);
      };
      const onRelease = ({ target }) => {
        gsap.to(target, { scale: 1, duration: 0 });
        setIsDraging(false);
      };

      Draggable.create('#draggable-logo', {
        bounds: "#main-wrapper",
        onDragStart: onClick,
        onDragEnd: onRelease,
        onPress: onClick,
        onRelease: onRelease
      });

      window.addEventListener("pointermove", onMove);

    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
      window.removeEventListener("pointermove", onMove);
    }

  }, []);

  return (
    <>
      <span ref={spanRef} className="fixed top-0 left-0 bg-tertiary dark:bg-tertiary-dark text-primary-dark dark:text-primary uppercase px-4 py-1 w-fit text-sm font-bold"  >{isDraging ? "now drag me" : "grab me"}  </span>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        id="draggable-logo" className="absolute pointer-events-auto touch-none cursor-grab w-14 h-14 top-2 left-6 md:w-20 md:h-20 md:top-5">
        <div className="pointer-events-none w-full h-full re">
          <Logos className="w-full h-full fill-primary dark:fill-primary-dark logo-svg" />
        </div>
      </div>
    </>
  )
}
