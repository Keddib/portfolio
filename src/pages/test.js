import About from "src/components/about";
import Layout from "src/components/layout";
import { useEffect, useRef } from 'react';
import { gsap } from "src/services/gasp";



export default function Test() {
  // const circleRef = useRef();

  // useEffect(() => {

  //   const onMove = ({ clientX, clientY }) => {
  //     console.log(clientX, clientY)
  //     gsap.to(circleRef.current, { x: clientX - 40, y: clientY - 50, delay: 0.001, zIndex: 1000 });

  //   };

  //   window.addEventListener("pointermove", onMove);

  //   return () => window.removeEventListener("pointermove", onMove);
  // }, []);

  return (
    <Layout home="Keddib - Home">
      <div className='border border-red'>
        <About />
      </div>
      {/* <div className="relative border border-red">
        <span className="fixed top-0 left-0 bg-tertiary dark:bg-tertiary-dark text-primary-dark dark:text-primary uppercase px-4 py-1 text-sm font-bold" ref={circleRef} >grab me</span>
      </div> */}
    </Layout>
  );
}
