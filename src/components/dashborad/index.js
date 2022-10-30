import Dashicon from "public/icons/dashboard.svg";
import { useEffect, useRef, useState } from "react";
import { gsap, Draggable } from "src/services/gasp";
import { onMove } from "src/services/animationEvents";
import { useMedia, mediaQueries } from "src/hooks/useMediaQuery";
import ShowButton from "./showButton";
import useHint from "src/hooks/useHint";
import DashNavbar from "./dashNav";
import DashOptions from "./dashOptions";

export default function Dashboard({ setDarkTheme, darkMode }) {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const dragRef = useRef();
  const { hintRef, setHintText } = useHint();
  const md = useMedia(mediaQueries.md);


  useEffect(() => {
    let ctx = gsap.context(() => {

      const onClick = () => {
        gsap.to(dragRef.current, { scale: 1.25, duration: 0 });
      };
      const onRelease = () => {
        gsap.to(dragRef.current, { scale: 1, duration: 0 });
      };
      Draggable.create(dragRef.current, {
        trigger: '#trigger-dash',
        onDragStart: onClick,
        onDragEnd: onRelease,
        onDrag: onMove,
        onPress: () => { setClicked(true) },
        onRelease: () => { setClicked(false) }

      });

    }); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup


  }, []);

  useEffect(() => {
    setHintText(clicked ? 'now drag me' : 'grab me');
  }, [clicked])


  useEffect(() => {
    if (hintRef && !md && !show) {
      hintRef.current.style.display = 'none';
    }
  }, [show, md]);

  const onEnter = () => {
    setHintText(clicked ? 'now drag me' : 'grab me');
    hintRef.current.style.display = 'inline';
  }

  const onLeave = () => {
    hintRef.current.style.display = 'none';
    setHintText('');
  }




  return (
    <div
      ref={dragRef}
      id="draggable-dashboard"
      className="group absolute top-4 right-4 md:right-6 md:top-8 text-primary-dark dark:text-primary"
    >
      {
        (md || !md && show) ? <>
          <div
            className="flex justify-between font-FivoSansModern font-extra-black uppercase
            items-center text-xs bg-background-dark dark:bg-background group-hover:bg-secondary dark:group-hover:bg-secondary-dark dark:group-hover:text-inverted"
          >
            <div

              id="trigger-dash"
              className="w-full md:h-10 flex items-center"
            >
              <span
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onMouseMove={onMove}
                className="w-full h-full flex items-center px-4"
              >
                Dashboard
              </span>
            </div>
            <ShowButton show={show} setShow={setShow} />
          </div>
        </> : <>
          <button id="trigger-dash" onClick={() => { setShow(!show) }}>
            <Dashicon className="svg-dash" />
          </button>
        </>
      }
      <div className="relative">
        {
          show &&
          <div className={`absolute  border-2 border-primary dark:border-primary-dark w-full p-6 group-hover:border-secondary`}>
            <DashNavbar />
            <DashOptions setDarkTheme={setDarkTheme} darkMode={darkMode} />
          </div>
        }
      </div>
    </div>
  );
}
