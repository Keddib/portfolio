// SSR doesn't work with ES Modules so we need to import the UMD files instead
import { gsap } from "gsap/dist/gsap";
import { Draggable } from "gsap/dist/Draggable";
// import { } from "gsap/dist/Twe";

// configure/register once we're running in the browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);

  // gsap.defaults({
  //   duration: 2
  // });

  // gsap.registerEffect({
  //   name: "fadeIn",
  //   effect(targets) {
  //     return gsap.from(targets, { opacity: 0, x: 200 });
  //   }
  // });
}

// export anything that you might need a reference to
export * from "gsap/dist/gsap";
export * from "gsap/dist/Draggable";
