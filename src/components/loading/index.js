import Logo from "public/icons/logo.svg";


export default function Loading() {



  return (
    <div className="fixed top-0 left-0 w-screen h-screen border bg-background-dark dark:bg-background">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-40 h-40">
          <Logo className="fill-primary-dark dark:fill-primary logo-svg w-full h-full" />
        </div>
      </div>
    </div>
  );
}
