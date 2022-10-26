import Img1 from "public/images/10.jpeg";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { Draggable } from "src/services/gasp";
import Button from "../button";
import Number from "../number";
import Title2 from "../title2";
import Title3 from "../title3";

export default function About() {

  // const imgRef = useRef(null);

  useEffect(() => {
    //
    Draggable.create('#draggable-img', {
      bounds: "#main-wrapper",
      trigger: '#topbar',
      onPress: function () {
        console.log("clicked");
      }
      // onDrag
    });
  }, []);

  return (
    <section className='section--default border'>
      <div className='grid grid-cols-24'>

        <div className='flex flex-col justify-end  items-start  col-start-3 col-end-22 lg:col-end-10  border border-red'>
          <Number>01</Number>
          <Title2>
            About DASH
          </Title2>
          <p className="paragraph">
            We're aiming to change the way the world works.
            By creating exciting tech that revolutionizes job boards.
            Reshapes temporary staffing. Rethinks recruitment. By challenging business as usual.
          </p>
          <Title3>
            So why DASH
          </Title3>
          <p className="paragraph">
            Everyone everywhere deserves quick and hassle-free access to the many
            jobs that make the world go around.
          </p>
          <Button>Check out work</Button>
        </div>

        <div className='col-start-1 col-end-25 lg:col-start-10 border border-secondary'>
          <div className="relative w-full pb-[150%] md:pb-[80%] border border-red">
            {/* <div id="draggable-img" className="absolute cursor-pointer top-1/2 left-1/2 will-change-transform  w-[66.66666667vw] md:w-[41.66666667vw] lg:w-[29.16666667vw] origin-50 ">
              <div className="w-full h-10" id="topBar">
                WORK
              </div>
              <Image src={Img1} alt="person at work" />
            </div> */}
            <div id="draggable-img" className="absolute cursor-pointer w-[66.66666667vw] top-1/4 left-1/2 will-change-transform md:w-[41.66666667vw] lg:w-[29.16666667vw]">
              <div className="overflow-hidden font-FivoSansModern max-w-[]">
                <div id="topbar" className="flex items-stretch justify-between text-xs font-extrabold uppercase pointer-events-auto font-display bg-background dark:bg-background-dark text-tertiary dark:text-tertiary-dark hover:bg-tertiary dark:hover:bg-tertiary-dark  hover:text-background dark:hover:text-background-dark">
                  <span className="block px-5 py-3 cursor-pointer font-extra-black">-</span>
                  <span className="block w-full px-5 py-3 text-right select-none flex-grow-1 cursor-[grab] touch-none font-extra-black">work</span>
                </div>
                <div className="flex relative w-full bg-secondary pb-[110%] ">
                  <div className="absolute inset-0">
                    <Image src={Img1} className="min-h-full min-w-full max-w-full max-h-full object-cover" alt="person at work" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
