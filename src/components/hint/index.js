import { useEffect, useRef } from "react";
import useHint from "src/hooks/useHint";

export default function Hint() {

  const spanRef = useRef();
  const { hintText, setHintRef } = useHint();

  useEffect(() => {
    setHintRef(spanRef);
  }, []);

  return (
    <span
      id="hintspan"
      ref={spanRef}
      className='hidden fixed top-10 left-10 bg-pink pointer-events-none
      dark:bg-tertiary-dark text-primary-dark dark:text-primary uppercase
        px-4 py-1 w-fit text-sm font-bold'
    >
      {hintText}
    </span>
  );
}
