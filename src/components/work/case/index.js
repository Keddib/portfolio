import Image from "next/image";
import { useRouter } from "next/router";
import ImageCover from "src/components/micro/animated_cover";
import Button from "src/components/micro/button";
import Number from "src/components/micro/number";
import Title4 from "src/components/micro/title4";


export default function Case({ project }) {

  const router = useRouter();

  function onClick() {
    window.open(project.link, '_blank');
  }

  return (
    <li className="w-full case">
      <div className="w-full md:w-1/2 xl:w-1/3">
        <Number>{project.id}</Number>
        <div>
          <Title4 className="w-full">
            {project.name}
          </Title4>
        </div>
      </div>
      <div className="relative w-full pb-[56.25%] bg-secondary">
        <Image className="object-cover" src={project.image} alt="project case" fill />
        <ImageCover />
      </div>
      <div className="flex flex-col w-full md:flex-row pt-[3.75rem]">
        <div className="w-[66.66666667vw] md:w-[25vw]">
          <h2 className="heading heading--4 capitalize">{project.title}</h2>
        </div>
        <div className="pt-5 md:pl-8 md:pt-0">
          <div className="w-[79.16666667vw] md:w-[50vw]">
            <div className="wysiwyg">
              <p>{project.description}</p>
            </div>
          </div>
          <Button className="mt-6" action={onClick}>
            CHECK code source
          </Button>
        </div>
      </div>
    </li>
  );
}
