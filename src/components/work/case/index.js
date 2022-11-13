import Image from "next/image";
import Button from "src/components/micro/button";


export default function Case({ project }) {
  return (
    <li className="w-full case">
      <div className="relative w-full pb-[56.25%] bg-secondary">
        <Image className="object-cover" src={project.image} alt="project case" fill />
      </div>
      <div className="flex flex-col w-full md:flex-row pt-[3.75rem]">
        <div className="w-[66.66666667vw] md:w-[25vw]">
          <h2 className="heading heading--4">{project.title}</h2>
        </div>
        <div className="pt-5 md:pl-8 md:pt-0">
          <div className="w-[79.16666667vw] md:w-[25vw]">
            <div className="wysiwyg">
              <p>{project.description}</p>
            </div>
          </div>
          <Button>
            CHECK code source
          </Button>
        </div>
      </div>
    </li>
  );
}
