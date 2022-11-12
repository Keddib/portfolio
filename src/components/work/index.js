import image3 from "public/images/1R5A0104.JPG"
import image2 from "public/images/1R5A0059.JPG"
import image1 from "public/images/1R5A9972.JPG"
import Button from "src/components/button";
import StackedImages from "src/components/stacked_images";

export default function Work() {
  return (
    <section className="section__default">
      <div className="relative grid grid-cols-24 gap-y-[16.66666667vw] md:gap-y-0 md:gap-x-2.5 py-[8.33333333vw]">
        <div className="order-2 md:order-1 col-start-3 col-end-23 md:col-start-3 md:col-end-19">
          <div className="js-script">
            <div className="block mb-6">
              <div className="inline">
                <div className="inline-flex items-center tagline transform -translate-y-2">
                  <span className="inline-block text-sm font-bold uppercase md:text-lg text-secondary font-FivoSansModern">what i build</span>
                  <span className="inline-block mx-4 rounded-full shrink-0 md:mx-8 bg-secondary w-3.5 h-3.5 md:w-7 md:h-7"></span>
                </div>
                <div className="inline uppercase ">
                  <span className="heading heading--3 work--heading font-bold">
                    I AM A WEB DEVELOPER WITH  BOLD IDEAS AND BIG AMBITIONS.
                    <span className="inline-block relative px-3 text-white ">
                      EAGER
                      <span className="inline-block absolute top-[10%] left-0 bg-secondary w-full h-full -rotate-1 -z-10"></span>
                    </span>
                    TO EXPERIMENT. WILLING TO F*CK UP. READY TO MAKE THE NEXT GREAT APP
                  </span>
                </div>
              </div>
            </div>
            <Button>
              Check my work
            </Button>
          </div>
        </div>
        <div className="relative z-10 w-full h-full pb-[100%] md:pb-0 md:absolute col-start-2 col-end-24 md:col-start-12 lg:col-start-14">
          <StackedImages images={[image3, image2, image1]} />
        </div>
      </div>
    </section>
  );
}
