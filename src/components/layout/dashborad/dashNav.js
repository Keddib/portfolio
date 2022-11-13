import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import DashLink from "./dashLink";


export default function DashNavbar() {

  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <nav>
      <ul className="text-primary dark:text-primary-dark uppercase font-heavy">
        <DashLink link="/" name="home" />
        <DashLink link="/about" name="about" />
        <DashLink link="/work" name="work" />
        <DashLink link="/contact" name="contact" />
        <DashLink link="/blog" name="blog">
          <span className="relative -top-2 right-0 text-xs font-medium text-tertiary dark:text-tertiary-dark">soon</span>
        </DashLink>
      </ul>
    </nav>
  );
}
