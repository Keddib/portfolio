export default function Footer() {
  return (
    <footer className="relative pt-4/24">
      <div className="items-end grid grid-cols-24 gap-x-2.5">
        <div className="hidden col-start-3 lg:block col-end-14 md:col-end-10 lg:col-end-8">
          <div className="flex flex-col">
            <div className="relative">
              <div className="uppercase heading heading--4">
                <div className="relative inline-block transform -rotate-2 mr-2 text-background dark:text-background-dark text--highlighted after:bg-tertiary dark:after:bg-tertiary-dark">
                  <span className="uppercase">Khalid</span>
                </div>
                <span className="uppercase">,The web is my arena</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden col-start-11 lg:block col-end-23 text-primary dark:text-primary-dark">
          <div className="flex justify-between">
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">Contact me</p>
              <a href="mailto:keddib.codes@gmail.com" className="pt-1 font-semibold text-lg text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark ">keddib.codes@gmail.com</a>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">Follow me</p>
              <div className="flex pt-1">
                <a href="https://www.linkedin.com/in/keddib/" className="text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark  font-semibold text-lg" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary font-display">github</p>
              <a href="https://www.github.com/keddib" className="pt-1 font-semibold text-lg text-primary dark:text-primary-dark hover:text-tertiary dark:hover:text-tertiary-dark " target="_blank" rel="noopener noreferrer">Keddib</a>
            </div>
          </div>
        </div>
        <div className="block col-start-3 lg:hidden col-end-23">
          <div className="flex flex-col gap-y-9">
            <div className="flex justify-between sm:justify-start">
              <div className="flex flex-col" >
                <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">github</p>
                <a href="https://www.github.com/keddib" className="pt-1 font-semibold text-lg hover:text-tertiary dark:hover:text-tertiary-dark" target="_blank" rel="noopener noreferrer">keddib</a></div></div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">Follow me</p>
              <div className="flex pt-1">
                <a className="font-semibold text-lg hover:text-tertiary dark:hover:text-tertiary-dark" href="https://www.linkedin.com/in/keddib/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="flex flex-col" >
              <p className="text-lg font-extra-black uppercase text-tertiary dark:text-tertiary-dark font-display">Contact me</p>
              <a href="mailto:keddib.codes@gmail.com" className="pt-1 font-semibold text-lg hover:text-tertiary dark:hover:text-tertiary-dark">keddib.codes@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-10 border-t border-solid border-primary grid grid-cols-24 gap-x-2.5 mt-[16.66666667vw] md:mt-[8.33333333vw]">
        <div className="col-start-3 md:col-start-2 col-end-23">
          <div className="flex flex-col justify-between md:flex-row">
            <p className="font-medium uppercase text-xxs">© Keddib, 2022</p>
            <div className="flex pt-1 md:pt-0">
              <a className="mr-5 font-medium uppercase cursor-pointer md:mr-0 md:ml-7 text-xxs text-tertiary md:text-primary md:hover:text-tertiary" href="https://twitter.com/khaeddib">twitter</a>
              <a className="mr-5 font-medium uppercase cursor-pointer md:mr-0 md:ml-7 text-xxs text-tertiary md:text-primary md:hover:text-tertiary" href="https://codepen.io/keddib">codepen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
