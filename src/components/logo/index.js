import Logos from "public/icons/logo.svg";
import { Draggable, gsap } from "src/services/gasp";
import { useEffect, useState } from "react";
import useHint from "src/hooks/useHint";
import { onMove } from "src/services/animationEvents";



const colors = ['#4f26e9', '#d9f24f', '#FF66FF'];

export default function Logo() {

  const [interval, setInt] = useState(null);
  const [isDraging, setIsDraging] = useState(false);
  const { hintRef, setHintText } = useHint();

  const onEnter = ({ currentTarget }) => {
    setHintText(isDraging ? 'now drag me' : 'grab me');
    if (hintRef) {
      hintRef.current.style.display = 'inline';
    }
    const svgEl = currentTarget.getElementsByTagName('svg');
    const colorIndex = 0;
    const it = setInterval(() => {
      colorIndex = (colorIndex + 1) % 3;
      gsap.to(svgEl, { duration: 0, fill: colors[colorIndex] });
    }, 200);
    setInt(it);
  };


  const onLeave = ({ currentTarget }) => {
    setHintText('');
    if (hintRef) {
      hintRef.current.style.display = 'none';
    }
    clearInterval(interval);
    const svgEl = currentTarget.getElementsByTagName('svg');
    gsap.to(svgEl, { duration: 0, fill: '' });
  };


  useEffect(() => {
    setHintText(isDraging ? 'now drag me' : 'grab me');
  }, [isDraging]);

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
        onDragStart: onClick,
        onDragEnd: onRelease,
        onPress: onClick,
        onRelease: onRelease,
        onMove: onMove
      });

    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }

  }, []);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      id="draggable-logo"
      className="absolute pointer-events-auto touch-none cursor-grab w-14 h-14 top-2 left-6 md:w-20 md:h-20 md:top-5"
    >
      <div className="pointer-events-none w-full h-full">
        <Logos className="w-full h-full fill-primary dark:fill-primary-dark logo-svg" />
      </div>
    </div>
  )
}
