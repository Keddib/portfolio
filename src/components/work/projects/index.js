import Case from "src/components/work/case";
import { projects } from "src/data";

export default function Projects() {
  return (
    <section className="section--default">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-3 col-end-23 md:col-start-2 md:col-end-24">
          <ul className="flex flex-col pt-10 md:pt-16 space-y-3/24 space-y-[21vw]">
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
