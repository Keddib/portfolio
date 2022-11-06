import { useEffect } from "react";
import { gsap } from "src/services/gasp";

export default function useAnimationOnScroll(id) {

  useEffect(() => {
    let ctx = gsap.context(() => {


      // animate text on scroll

      gsap.from(id, {
        delay: 0.1,
        opacity: 0,
        top: '30%',
        duration: 1,
        scrollTrigger: {
          trigger: id,
          start: "50% bottom",
        }
      });


    }); // <- IMPORTANT! Scopes selector text

    return () => {  // cleanup
      ctx.revert();
    }
  }, []);
}
