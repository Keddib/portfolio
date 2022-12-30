import { useRef } from "react";
import Button from "src/components/micro/button";

export default function Intro() {

  const FPDref = useRef(null);

  function onClick() {
    console.log('action', FPDref.current);
    FPDref.current.click();
  }

  return (
    <section className="section--default">
      <div className="relative grid grid-cols-24 gap-y-4/24 md:gap-y-0 md:gap-x-2.5 pt-2/24">
        <div className="order-2 md:order-1 col-start-3 col-end-23 md:col-start-4 md:col-end-20">
          <div className="js-reveal-parent">
            <div className="block mb-6 js-reveal-child" >
              <div className="inline">
                <div className="inline-flex pb-3 items-center tagline transform -translate-y-2">
                  <span className="inline-block text-sm font-bold uppercase md:text-lg text-secondary font-FivoSansModern">
                    Interactive Front-end developer
                  </span>
                  <span className="inline-block mx-4 rounded-full shrink-0 md:mx-8 bg-secondary w-3.5 h-3.5 md:w-7 md:h-7 transform -translate-y-0.5"></span>
                </div>
                <div className=" uppercase">
                  <span className="heading heading--3 work--heading">
                    I'm Khalid Eddib, a web developer . I like to resolve
                    <span className="inline-block relative pb-2 px-2 text-white -rotate-1 bg-secondary">
                      design
                    </span>
                    problems, create smart user interfaces and imagine useful interactions and developing rich web experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full mb-8 text-base md:text--lg md:w-2/5 wysiwyg js-reveal-child" >
              <p>Pretty intresting, right? I am currently attending 1337 (42 Network) as a software engineering student and I had the chance to aquire some professonal experience at web developement too.</p>
            </div>
              <Button action={onClick} >
                check my resume
              </Button>
              <a ref={FPDref} href={"/resume.pdf"} target='_blank' className=""></a>
          </div>
        </div>
      </div>
    </section>
  );
}
