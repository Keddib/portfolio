import image_one from "public/images/image_x1.jpg";
import image_two from "public/images/image_x2.jpg";
import { useRouter } from "next/router";
import Button from "src/components/micro/button";
import Number from "src/components/micro/number";
import Title2 from "src/components/micro/title2";
import Title3 from "src/components/micro/title3";
import ImageDrag from "src/components/micro/imagedrag";
import useAnimationOnScroll from "src/hooks/useOnScroll";

export default function About() {

  useAnimationOnScroll("#about__text");
  const router = useRouter();


  function onClick() {
    router.push('/about');
  }

  return (
    <>
      <section className='section--default'>
        <div className='grid grid-cols-24' >

          <div className='relative flex flex-col justify-end  items-start  col-start-3 col-end-22 lg:col-end-10  overflow-hidden '>
            <div id="about__text">
              <Number>01</Number>
              <Title2 className="">
                About ME
              </Title2>
              <p className="paragraph mb-6">
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible , user friendly web applications.
              </p>
              <Title3>
                So why
              </Title3>
              <p className="paragraph ">
                I enjoy creating things that live on the internet.
              </p>
              <Button action={onClick} className="mt-[8.333333vw] md:mt-[4.16666667]">know more</Button>
            </div>
          </div>

          <div className='col-start-1 col-end-25 lg:col-start-10 '>
            <div className="relative w-full pb-[150%] md:pb-[80%] ">
              <ImageDrag img={image_two} className='draggable-position' name="about" />
              <ImageDrag img={image_one} className='draggable-position2' name="work" />

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
