import { useRef, useEffect } from "react";
import { gsap } from "src/services/gasp";
import { onMove } from "src/services/animationEvents";
import Image from "next/image";
import ImageCover from "src/components/micro/animated_cover";
import useHint from "src/hooks/useHint";


// max images is 4. if we add one we need to add styling for it

export default function StackedImages({ images, full }) {

  const imgParentRef = useRef(null);
  const tl = useRef(null);
  const { hintRef, setHintText } = useHint();

  const onEnter = (e) => {
    setHintText('next');
    if (hintRef) {
      hintRef.current.style.display = 'inline';
    }
    onMove(e);
  };


  const onLeave = () => {
    setHintText('');
    if (hintRef) {
      hintRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
    });

    return () => {
      ctx.revert();
    }
  }, []);

  function hundleStartClick(e) {
    const elems = [...imgParentRef.current.children];
    elems.forEach((el) => {
      const anim = gsap.to(el, { display: 'block', duration: 0.15 });
      tl.current.add(anim);
    });
  }

  function hundleImageClick(index) {
    gsap.to(imgParentRef.current.children[index], { display: 'none', duration: 0 });
  }

  return (
    <div
      id="stacked--images"
      className={`w-full h-full ${full ? 'stacked-images-full' : 'stacked-images'}`}
    >
      <div
        onClick={hundleStartClick}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
        onMouseOver={() => { setHintText('restart') }}
        className="absolute flex items-center justify-center w-[80%] h-full bg-transparent border border-solid cursor-pointer top-1/2 left-1/2 border-secondary stacked-image-delete"
      >
        <p className="absolute text-base font-bold uppercase -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 font-display text-secondary">
          Start over
        </p>
      </div>
      <div
        ref={imgParentRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
        onMouseOver={() => { setHintText('next') }}
      >
        {
          images.map((img, index) => {
            return (
              <div
                key={index}
                onClick={() => hundleImageClick(index)}
                className="absolute h-full cursor-pointer w-[80%] top-1/2 left-1/2 stacked-image"
              >
                <div className="relative w-full h-full bg-secondary overflow-hidden">
                  <Image
                    className="object-cover"
                    src={img}
                    alt="me at work"
                    fill
                    sizes={`${full ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}`}
                  />
                  <ImageCover />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
