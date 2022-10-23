import Dashicon from "public/icons/dashboard.svg";
import Link from "next/link";
import { useState } from "react";
import { useMedia, mediaQueries } from "src/hooks/useMediaQuery";



export default function Dashboard({ setDarkTheme, darkMode }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const md = useMedia(mediaQueries.md);

  const btn = (() => {
    if (md || !md && show) {

      return <button
        onClick={() => { setShow(!show) }}
        onMouseEnter={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}
        className="flex justify-between font-FivoSansModern font-extra-black uppercase
      items-center text-xs bg-background-dark dark:bg-background hover:bg-secondary dark:hover:bg-secondary-dark dark:hover:text-inverted"
      >
        <span className="w-full px-4 md:h-10 flex items-center">Dashboard</span>
        <span className="w-10 h-10 items-center flex justify-center">{show ? "-" : "+"}</span>
      </button>
    } else if (!md) {
      return <button onClick={() => { setShow(!show) }}>
        <Dashicon className="svg-dash" />
      </button>
    }
  })();

  return (
    <div className="text-primary-dark dark:text-primary md:border-red border">
      {btn}
      <div className="relative">
        {
          show &&
          <div className={`absolute border-2 border-primary dark:border-primary-dark w-full p-6 ${hover && 'border-secondary dark:border-secondary-dark'}`}>
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
              <button onClick={() => { setDarkTheme(false) }} className="flex items-center gap-2">
                <span className="w-6 h-6 border rounded-full flex justify-center items-center">
                  <span className={`w-3 h-3 rounded-full ${!darkMode && 'bg-tertiary dark:bg-tertiary-dark'}`}></span>
                </span>
                <span className="text-xs font-semibold">LIGHT</span>
              </button>
              <button onClick={() => { setDarkTheme(true) }} className="flex items-center gap-2 mt-2">
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
