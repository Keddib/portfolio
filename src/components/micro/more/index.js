import Arrow from "public/icons/arrow.svg";
import { useRef, useEffect } from "react";
import { gsap } from "src/services/gasp";
import Number from "src/components/micro/number";
import Title2 from "src/components/micro/title2";
import ImageCover from "src/components/micro/animated_cover";
import Link from "next/link";
import Image from "next/image";

import mypic from "public/images/1R5A0079.JPG";

const MoreImage = ({ image, text }) => {

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
        translate: "-100% 0%",
        duration: 3,
        ease: 'none',
      },
        {
          translate: "0% 0%",
          duration: 3,
          ease: 'none',
        }
      );
    });

    return () => {
      cxt.revert();
    }
  }, []);

  return (
    <>
      <div className='absolute inset-0 z-10 w-full h-full'>
        <Image src={mypic} alt="test" />
        <ImageCover />
      </div>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="group absolute z-30 flex items-center justify-center w-full h-full">
        <div className="relative flex justify-center w-screen overflow-hidden flex-nowrap marquee bg-transparent text-tertiary dark:text-tertiary-dark group-hover:bg-tertiary dark:group-hover:bg-tertiary-dark group-hover:text-primary-dark dark:group-hover:text-primary transition-all">
          <div className="z-10 flex items-center js-marquee-text shrink-0 w-full ">
            <div className="flex items-center shrink-0 z-10 px-5 pb-2">
              <span className="font-bold text-transparent text-center marquee__text !uppercase heading heading--4">{text}</span>
            </div>
            <div className="relative shrink-0  w-6 h-6 transfrom -rotate-45 text-transparent">
              <Arrow className="text-transparent" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center z-20  font-bold text-center marquee__text !uppercase heading heading--4 boredr border-red">
            <div ref={textRef} className="flex w-screen overflow-hidden flex-nowrap marquee">
              <div className="flex items-center shrink-0 z-10 px-5 py-4">
                <div className="flex items-center shrink-0 z-10 px-5 pb-2">
                  <span className="font-bold text-center marquee__text !uppercase heading heading--4">{text}</span>
                </div>
                <div className="relative shrink-0  w-6 h-6 transfrom -rotate-45 text-transparent">
                  <Arrow className="group-hover:text-primary-dark dark:group-hover:text-primary transition-all" />
                </div>
              </div>
              <div className="flex items-center shrink-0 z-10 px-5 py-4">
                <div className="flex items-center shrink-0 z-10 px-5 pb-2">
                  <span className="font-bold text-center marquee__text !uppercase heading heading--4">{text}</span>
                </div>
                <div className="relative shrink-0  w-6 h-6 transfrom -rotate-45 text-transparent">
                  <Arrow className="group-hover:text-primary-dark dark:group-hover:text-primary  transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default function More({ number, images, calls, links }) {
  return (
    <section className="section--default pt-[12.5vw] md:pt-[16.66666667vw] pb-[8.33333333vw]">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-4 col-end-23">
          <Number>{number}</Number>
          <div>
            <Title2 className="w-[37.5vw] md:w-[25vw] lg:w-[20.83333333vw]">
              Want to see more?
            </Title2>
          </div>
        </div>
        <div className="order-2 col-start-3 md:order-1 col-end-23 md:col-start-4 md:col-end-12 md:z-10">
          <Link href="/">
            <div className="relative w-full cursor-pointer pb-[100%] transform md:translate-x-12 md:translate-y-20 -rotate-[10deg] overflow-hidden border">
              <MoreImage image={images[1]} text={calls[1]} />
            </div>
          </Link>
        </div>
        <div className="z-10 order-1 col-start-3 pt-16 md:pt-0 col-end-23 md:col-start-13 md:col-end-21 md:z-0">
          <Link href="">
            <div className="relative w-full cursor-pointer pb-[100%] transform md:-translate-y-4 rotate-[10deg]  overflow-hidden border">
              <MoreImage image={images[0]} text={calls[0]} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
