import StackedImages from "src/components/micro/stacked_images";

export default function Catalog() {
  return (
    <section className="section--default pt-[12.5vw] md:pt-[8.33333333vw]">
      <div className="relative grid grid-cols-24">
        <div className="relative z-10 w-full pb-[52%] col-start-2 col-end-24 ">
          <StackedImages images={[1, 2, 1, 3]} full={true} />
        </div>
      </div>
    </section>
  );
}
