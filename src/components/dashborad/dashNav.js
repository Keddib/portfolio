import Link from "next/link";

export default function DashNavbar() {
  return (
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
  );
}
