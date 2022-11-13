import Link from "next/link";
import Number from "src/components/micro/number";
import Title2 from "src/components/micro/title2";

export default function Experiences({ experiences }) {
  return (
    <section className="relative section--default">
      <div className="grid grid-cols-24 gap-x-2.5">
        <div className="col-start-3 col-end-23 z-50 md:col-start-8 lg:col-start-10 md:col-end-22 pt-[8.33333333vw]">
          <ul className="flex flex-col space-y-20">
            {
              experiences.map((ex, id) => {
                return (
                  <li key={id}>
                    <Number>{ex.number}</Number>
                    <div className="flex flex-col justify-between md:flex-row">
                      <Title2 className="w-full md:w-[20.83333333vw] lg:w-[16.66666667vw]">
                        {ex.title}
                      </Title2>
                      <div className="w-full md:pl-2 md:w-[33.33333333vw] lg:w-[29.16666667vw]" >
                        <div className="flex justify-between items-center">
                          <Number className="group">
                            <a href={ex.link} target="_blank" rel="noopener noreferrer" >
                              {`@${ex.company}`}
                            </a>
                            <span className="block bg-transparent h-[2px] mt-[2px] group-hover:bg-secondary transition-all"></span>
                          </Number>
                          <span className="mb-4 text-xs">{`${ex.from} - ${ex.to}`}</span>
                        </div>
                        <p className="paragraph">
                          {ex.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
