import ImageDrag from "src/components/micro/imagedrag";

export default function Me() {
  return (
    <section className="section--default">
      <div className="flex justify-center md:justify-end md:mr-[12.5vw]">
        <div className="w-full md:w-[58.33333333vw] lg:w-[45.83333333vw]">
          <div className="relative w-full pb-[150%] md:pb-[80%]">
            <ImageDrag img={10} className='draggable-position' name="work" />
            <ImageDrag img={10} className='draggable-position2' name="connect" />
          </div>
        </div>
      </div>
    </section>
  );

}
