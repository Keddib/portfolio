import Link from "next/link";

export default function DashNavbar() {
  return (
    <nav>
      <ul className="text-primary dark:text-primary-dark uppercase font-heavy">
        <li>
          <Link href="/">
            <span className="inline-block w-full py-1 hover:pl-2">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="inline-block w-full py-1 hover:pl-2">About</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="inline-block w-full py-1 hover:pl-2">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="inline-block w-full py-1 hover:pl-2">Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="inline-block w-full py-1 hover:pl-2">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
