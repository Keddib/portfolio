import Dashicon from "public/icons/dashboard.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMedia, mediaQueries } from "src/hooks/useMediaQuery";
import { Draggable, gsap } from "src/services/gasp";




export default function Dashboard({ setDarkTheme, darkMode }) {
  const [show, setShow] = useState(false);
  const md = useMedia(mediaQueries.md);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const onClick = () => {
        gsap.to('#draggable-dashboard', { scale: 1.25, duration: 0 });
      };
      const onRelease = () => {
        gsap.to('#draggable-dashboard', { scale: 1, duration: 0 });
      };

      Draggable.create('#draggable-dashboard', {
        bounds: "#main-wrapper",
        trigger: '#tobButtonBar',
        onDragStart: onClick,
        onDragEnd: onRelease,
      });

    }); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, []);

  const btn = (() => {
    if (md || !md && show) {

      return <button
        onClick={() => { setShow(!show) }}
        className="flex justify-between font-FivoSansModern font-extra-black uppercase
      items-center text-xs bg-background-dark dark:bg-background group-hover:bg-secondary dark:group-hover:bg-secondary-dark dark:group-hover:text-inverted"
      >
        <span id="tobButtonBar" className="w-full px-4 md:h-10 flex items-center">Dashboard</span>
        <span className="w-10 h-10 items-center flex justify-center cursor-pointer">{show ? "-" : "+"}</span>
      </button>
    } else if (!md) {
      return <button id="tobButtonBar" onClick={() => { setShow(!show) }}>
        <Dashicon className="svg-dash" />
      </button>
    }
  })();

  return (
    <div className="group absolute right-6 top-4 text-primary-dark dark:text-primary border border-red" id="draggable-dashboard">
      {btn}
      <div className="relative">
        {
          show &&
          <div className={`absolute  border-2 border-primary dark:border-primary-dark w-full p-6 group-hover:border-secondary`}>
            <nav>
              <ul className="text-primary dark:text-primary-dark uppercase font-heavy">
                <li>
                  <Link href="/">
                    <a className="inline-block w-full py-1 hover:pl-2">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block w-full py-1 hover:pl-2">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block w-full py-1 hover:pl-2">Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block w-full py-1 hover:pl-2">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block w-full py-1 hover:pl-2">Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="text-primary dark:text-primary-dark mt-4" >
              <button
                onClick={() => { setDarkTheme(false) }}
                onTouchStart={() => { setDarkTheme(false) }}
                className="flex items-center gap-2"
              >
                <span className="w-6 h-6 border rounded-full flex justify-center items-center">
                  <span className={`w-3 h-3 rounded-full ${!darkMode && 'bg-tertiary dark:bg-tertiary-dark'}`}></span>
                </span>
                <span className="text-xs font-semibold">LIGHT</span>
              </button>
              <button
                onClick={() => { setDarkTheme(true) }}
                onTouchStart={() => { setDarkTheme(true) }}
                className="flex items-center gap-2 mt-2"
              >
                <span className="w-6 h-6 border rounded-full flex justify-center items-center">
                  <span className={`w-3 h-3 rounded-full ${darkMode && 'bg-tertiary dark:bg-tertiary-dark'}`}></span>
                </span>
                <span className="text-xs font-semibold">DARK</span>
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
