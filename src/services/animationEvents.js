import { gsap } from "src/services/gasp";

function onMove({ clientX, clientY }) {
  gsap.to('#hintspan', { x: clientX - 140, y: clientY - 110, delay: 0, zIndex: 100000 });
};

export { onMove };
