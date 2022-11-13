import { gsap } from "src/services/gasp";
import { useRef, useEffect } from "react";

export default function ImageCover() {

  const imageConver = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageConver.current, {
        scaleY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageConver.current,
          start: "50% bottom"
        }
      });
    });

    return (() => {
      ctx.revert();
    })
  }, []);

  return (
    <div ref={imageConver} className="absolute top-0 left-0 w-full h-full bg-secondary"></div>
  );
}
