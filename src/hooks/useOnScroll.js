import { useEffect } from "react";
import { gsap } from "src/services/gasp";

export default function useAnimationOnScroll(id) {

  useEffect(() => {
    let ctx = gsap.context(() => {


      // animate text on scroll

      gsap.from(id, {
        delay: 0.1,
        yPercent: 100,
        duration: 1,
        scrollTrigger: {
          trigger: id,
          start: "-30% bottom",
        }
      });


    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }
  }, []);
}
