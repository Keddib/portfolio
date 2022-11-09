import { useRouter } from "next/router";
import Link from "next/link";

export default function DashLink({ link, name, children }) {

  const router = useRouter();

  return (
    <li className={`${router.pathname == link ? "text-tertiary dark:text-tertiary-dark" : ""}`}>
      <Link href={link} >
        <div className="flex justify-between items-center cursor-pointer">
          <span className="inline-block relative w-full py-1 hover:pl-2 transition-all">
            {name}
            {children}
          </span>
          <div className={`${router.pathname == link ? "opacity-100" : "opacity-0"} w-2 h-2 rounded-full -md:ml-16 bg-tertiary dark:bg-tertiary-dark md:w-2 md:h-2`}></div>
        </div>
      </Link>
    </li>
  );
}
