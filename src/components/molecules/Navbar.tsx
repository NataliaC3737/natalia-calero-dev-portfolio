import Link from "next/link";
import { ThemeToggle } from "../atoms/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 px-32 py-5 w-full flex items-center justify-between">
      <Link href={"/"} className="text-brown-coffee font-bagel-fat-one text-2xl">
        COCONAT
      </Link>
      <div className="flex gap-6">
        <Link href={"/me"} className="text-brown-coffee font-afacad text-lg">
          About me
        </Link>
        <Link
          href={"/projects"}
          className="text-brown-coffee font-afacad text-lg"
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
          className="text-brown-coffee font-afacad text-lg"
        >
          Get in touch
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
