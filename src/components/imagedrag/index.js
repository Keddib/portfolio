import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import useHint from 'src/hooks/useHint';
import { onMove } from 'src/services/animationEvents';
import { Draggable, gsap } from "src/services/gasp";

export default function ImageDrag({ img, className, name }) {

  const [isDraging, setIsDraging] = useState(false);
  const triggerRef = useRef(null);
  const draggableRef = useRef(null);
  const imageConver = useRef(null);
  const { setHintText, hintRef } = useHint();


  const onEnter = () => {
    setHintText(isDraging ? 'now drag me' : 'grab me');
    if (hintRef) {
      hintRef.current.style.display = 'inline';
    }
  };


  const onLeave = () => {
    setHintText('');
    if (hintRef) {
      hintRef.current.style.display = 'none';
    }
  };

  useEffect(() => {

    // create our context. This function is invoked immediately and all GSAP
    // animations and Draggable created during the execution of this function
    // get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component

      gsap.to(imageConver.current, {
        scaleY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: draggableRef.current,
          start: "50% bottom"
        }
      });

      const onClick = () => {
        setIsDraging(true);
        gsap.to(draggableRef.current, { scale: 1.05, duration: 0 });
      };
      const onRelease = () => {
        setIsDraging(false);
        gsap.to(draggableRef.current, { scale: 1, duration: 0 });
      };

      Draggable.create(draggableRef.current, {
        trigger: triggerRef.current,
        onDragStart: onClick,
        onDragEnd: onRelease,
        onPress: onClick,
        onRelease: onRelease,
        onMove: onMove
      });

    }); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, []);

  useEffect(() => {
    setHintText(isDraging ? 'now drag me' : 'grab me');
  }, [isDraging]);

  return (
    <div ref={draggableRef} className={`absolute ${className} cursor-pointer w-[66.66666667vw] top-1/2 left-1/2 will-change-transform md:w-[41.66666667vw] lg:w-[29.16666667vw]`}>
      <div className="overflow-hidden font-FivoSansModern">
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onMouseMove={onMove}
          ref={triggerRef} className="flex items-stretch justify-between text-xs font-extrabold uppercase pointer-events-auto font-display bg-background dark:bg-background-dark text-tertiary dark:text-tertiary-dark hover:bg-tertiary dark:hover:bg-tertiary-dark  hover:text-background dark:hover:text-background-dark">
          <span className="block px-5 py-3 cursor-pointer font-extra-black">-</span>
          <span className="block w-full px-5 py-3 text-right select-none flex-grow-1 cursor-[grab] touch-none font-extra-black">{name}</span>
        </div>
        <div className="flex relative w-full bg-secondary pb-[110%] ">
          <div className="absolute inset-0">
            <Image src={img} className="min-h-full min-w-full max-w-full max-h-full object-cover" alt="personal image" />
            <div ref={imageConver} className="absolute top-0 left-0 w-full h-full bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
