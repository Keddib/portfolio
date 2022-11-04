import Link from "next/link";

export default function Button({ children }) {
  return (

    <div className="stagger-child js-reveal-child">
      <Link href="/">
        <a className="mt-[8.333333vw] md:mt-[4.16666667] inline-flex relative px-5 py-4 text-xs font-black uppercase font-display bg-tertiary dark:bg-tertiary-dark md:text-sm">
          <span className="relative z-10 text-background dark:text-background-dark">{children}</span>
          <div className="absolute inset-0 flex items-center z-20 bg-tertiary dark:bg-tertiary-dark text-background dark:text-background-dark">
            <div className="flex w-screen overflow-hidden flex-nowrap marquee">
              <div className="flex items-center shrink-0 z-10 js-marquee-text px-5 py-4">
                <span className="">{children}</span>
              </div>
              <div className="flex items-center shrink-0 z-10 js-marquee-text px-5 py-4">
                <span className="">{children}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>

  );
}
