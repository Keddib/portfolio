import Number from "src/components/micro/number";
import Title2 from "src/components/micro/title2";
import Case from "src/components/work/case";
import { projects } from "src/data";

export default function Projects() {
  return (
    <section className="section--default">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-3 col-end-23 md:col-start-4 md:col-end-14 lg:col-end-11">
          <Number>01</Number>
          <div>
            <Title2 className="w-[37.5vw] md:w-[25vw] lg:w-[20.83333333vw]">
              Project Name
            </Title2>
          </div>
        </div>
        <div className="col-start-3 col-end-23 md:col-start-2 md:col-end-24">
          <ul className="flex flex-col pt-10 md:pt-16 space-y-3/24">
            {
              projects.map((proj, i) => {
                return (
                  <Case key={i} project={proj} />
                );
              })
            }
          </ul>
        </div>
      </div>

    </section>
  );
}
