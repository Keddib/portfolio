import image1 from "public/images/image_x11.jpg";
import image2 from "public/images/image_x10.jpg";
import image3 from "public/images/image_x9.jpg";
import image4 from "public/images/image_x8.jpg";
import StackedImages from "src/components/micro/stacked_images";

export default function Catalog() {
  return (
    <section className="section--default pt-[12.5vw] md:pt-[8.33333333vw]">
      <div className="relative grid grid-cols-24">
        <div className="relative z-10 w-full pb-[52%] col-start-2 col-end-24 ">
          <StackedImages images={[image1, image2, image3, image4]} full={true} />
        </div>
      </div>
    </section>
  );
}
