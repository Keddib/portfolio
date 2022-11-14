import { useEffect } from "react";
import useHint from "src/hooks/useHint";
import { onMove } from "src/services/animationEvents";

export default function ShowButton({ show, setShow }) {


  const { hintRef, setHintText } = useHint();


  useEffect(() => {
    setHintText(show ? 'hide' : 'show');
  }, [show]);

  const onEnter = (e) => {
    setHintText(show ? 'hide' : 'show');
    hintRef.current.style.display = 'inline';
    onMove(e);
  }

  const onLeave = () => {
    hintRef.current.style.display = 'none';
    setHintText('');
  }

  return (
    <>
      <button
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
        onClick={() => { setShow(!show) }}
        className="w-10 h-10 items-center flex justify-center cursor-pointer"
      >
        {show ? "-" : "+"}
      </button>
    </>
  );
}
