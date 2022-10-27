import { Draggable, gsap } from "src/services/gasp";
import { useEffect, useState } from "react";


export default function useDrageAnimation(dragable, bounds, trigger) {

  useEffect(() => {

    // create our context. This function is invoked immediately and all GSAP
    // animations and Draggable created during the execution of this function
    // get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component

      const onClick = ({ target }) => {
        gsap.to(target, { scale: 1.25, duration: 0 });
      };
      const onRelease = ({ target }) => {
        gsap.to(target, { scale: 1, duration: 0 });
      };

      Draggable.create('#draggable-logo', {
        bounds: "#main-wrapper",
        onDragStart: onClick,
        onDragEnd: onRelease,
        onPress: onClick,
        onRelease: onRelease
      });

    }); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, []);
}
