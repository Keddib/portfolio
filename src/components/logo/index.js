import Logos from "public/icons/logo.svg";
import { Draggable } from "src/services/gasp";
import { useEffect } from "react";


export default function Logo() {

  useEffect(() => {
    Draggable.create('#draggable-logo', {
      bounds: "#main-wrapper"
    });
  }, []);

  return (
    <div id="draggable-logo" className="absolute pointer-events-auto touch-none cursor-grab w-14 h-14 top-2 left-6 md:w-20 md:h-20 md:top-5">
      <div className="pointer-events-none w-full h-full">
        <Logos className="w-full h-full fill-primary dark:fill-primary-dark logo-svg" />
      </div>
    </div>
  )
}
