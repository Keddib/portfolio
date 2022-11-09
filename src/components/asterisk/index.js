import AsteriskIcon from "public/icons/asterisk.svg";
import { onMove } from "src/services/animationEvents";
import useHint from "src/hooks/useHint";

export default function Asterisk({ elmRef }) {

  const { hintRef, setHintText } = useHint();

  const onEnter = () => {
    setHintText('who ?');
    if (hintRef) {
      hintRef.current.style.display = 'inline';
    }
  }

  const onLeave = () => {
    setHintText('');
    if (hintRef) {
      hintRef.current.style.display = 'none';
    }
  };


  return (
    <button
      id="who" aria-label="shows a modal"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onClick={() => { console.log('show modal') }}
      ref={elmRef}
      className="asterisk absolute flex items-center justify-center rounded-full cursor-pointer bg-background dark:bg-background-dark -top-6 -right-6 md:-top-12 md:-right-12 w-7 h-7 md:w-12 md:h-12"
    >
      <div className="w-3 h-3 md:w-6 md:h-6 text-tertiary dark:text-tertiary-dark text-center">
        <AsteriskIcon />
      </div>
    </button>
  );
}
