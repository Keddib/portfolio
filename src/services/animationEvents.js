import { gsap } from "src/services/gasp";

function onMove({ clientX, clientY }) {
  gsap.to('#hintspan', { x: clientX - 50, y: clientY - 40, delay: 0, zIndex: 100000 });
};

export { onMove };
