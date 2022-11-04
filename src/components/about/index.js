import Img1 from "public/images/10.jpeg";
import Button from "src/components/button";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import Title3 from "src/components/title3";
import ImageDrag from "src/components/imagedrag";
import useAnimationOnScroll from "src/hooks/useOnScroll";

export default function About() {

  useAnimationOnScroll("#about__text");

  return (
    <>
      <section className='section--default'>
        <div className='grid grid-cols-24'>

          <div id="about__text" className=' relative flex flex-col justify-end  items-start  col-start-3 col-end-22 lg:col-end-10  '>
            <Number>01</Number>
            <Title2>
              About ME
            </Title2>
            <p className="paragraph">
              I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building accessible , user friendly web applications.
            </p>
            <Title3>
              So why
            </Title3>
            <p className="paragraph">
              I enjoy creating things that live on the internet.
            </p>
            <Button>check my Resume</Button>
          </div>

          <div className='col-start-1 col-end-25 lg:col-start-10 '>
            <div className="relative w-full pb-[150%] md:pb-[80%] ">
              <ImageDrag img={Img1} className='draggable-position' name="work" />
              <ImageDrag img={Img1} className='draggable-position2' name="work" />

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
