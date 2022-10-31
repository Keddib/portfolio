import Number from "src/components/number";

export default function Title() {
  return (
    <section className="relative mt-32 section--default pt-[16.66666667vw] md:mt-[12.5vw] md:pt-[4.16666667vw] border">
      <div className="grid grid-cols-24 gap-x-2.5 border-red border">
        <div className="col-start-3 col-end-23 xl:col-start-3 xl:col-end-19 border border-pink">
          <div className="w-full border border-black">
            <Number>
              this is dash
            </Number>
            <div className="relative pt-8">
              <div className="heading--1 uppercase font-FivoSansModern font-bold">
                <h1 className="">
                  <span id="main-word" className="relative">
                    almost
                    <span>*</span>
                  </span>
                  <span> the </span>
                  <span>best </span>
                  <span>tech </span>
                  <span>company </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
