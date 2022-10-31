import Img1 from "public/images/10.jpeg";
import Button from "src/components/button";
import Number from "src/components/number";
import Title2 from "src/components/title2";
import Title3 from "src/components/title3";
import ImageDrag from "src/components/imagedrag";

export default function About() {

  return (
    <>
      <section className='section--default'>
        <div className='grid grid-cols-24'>

          <div className='flex flex-col justify-end  items-start  col-start-3 col-end-22 lg:col-end-10  '>
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

          <div className='col-start-1 col-end-25 lg:col-start-10 '>
            <div className="relative w-full pb-[150%] md:pb-[80%] ">
              <ImageDrag img={Img1} className={'draggable-position'} name="work" />
              <ImageDrag img={Img1} className={'draggable-position2'} name="work" />

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
