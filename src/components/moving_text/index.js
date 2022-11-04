import { useEffect, useRef, useState } from "react";
import { gsap } from "src/services/gasp";

export default function MovingText({ children }) {

  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);

  const [resize, setResize] = useState(0);

  useEffect(() => {

    function onResize() {
      console.log('resize');
      setResize((prev) => prev + 1);
    }

    window.addEventListener('resize', onResize);

    return () => {
      // delete callback
      window.removeEventListener('resize', onResize);
    }
  }, []);


  useEffect(() => {

    console.log('run again');

    let ctx = gsap.context(() => {


      // animate moving text on scroll

      gsap.from(wrapperRef.current, {
        scaleY: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "30% bottom",
        }
      });


      const wSize = headerRef.current.clientWidth;

      boxesRef.current.style.left = `${wSize * -1}px`;

      var boxWidth = wSize,
        totalWidth = boxWidth * 3,  //  * n of boxes
        no01 = document.querySelectorAll("#no01 .box"),
        dirFromLeft = "+=" + totalWidth;


      var mod = gsap.utils.wrap(0, totalWidth);

      function marquee(which, time, direction) {
        gsap.set(which, {
          x: function (i) {
            return i * boxWidth;
          }
        });
        var action = gsap.timeline()
          .to(which, {
            x: direction,
            modifiers: {
              x: x => mod(parseFloat(x)) + "px"
            },
            duration: time, ease: 'none',
            repeat: -1,
          });
        return action
      }

      gsap.timeline()
        .add(marquee(no01, 50, dirFromLeft), 1);


    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }
  }, [resize])

  return (
    <div ref={wrapperRef} className="w-full heading uppercase text-[4rem] md:text-[9.75rem] absolute top-[4vw] ">

      <div id="no01" className="w-[150%] h-20 md:h-40 overflow-hidden"
      >
        <div ref={boxesRef} className="relative -left-[unkown] w-full">
          <h1 ref={headerRef} className="absolute box h-20 md:h-40 w-fit text-center">{children}</h1>
          <h1 className="absolute box h-20 md:h-40">{children}</h1>
          <h1 className="absolute box h-20 md:h-40">{children}</h1>
        </div>
      </div>
    </div>
  );
}
