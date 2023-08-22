import Image from "next/image";
import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "../constants";

import Link from "next/link";
const Nav = () => {
  return (
    <header className="padding-x py-5 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link rel="stylesheet" href="/">
          {/* <Image src={headerLogo} alt={"Logo"} width={130} height={29} />*/}
          <span
            className="text-3xl 
        text-purple-800 font-extrabold">
            Skate Monkey
          </span>{" "}
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
