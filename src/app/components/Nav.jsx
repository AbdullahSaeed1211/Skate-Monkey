"use client";
import React, { useState } from "react";
import Image from "next/image";
import { hamburger, close } from "@/assets/icons"; // Replace with your icon import
import { navLinks } from "../constants";
import Link from "next/link";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="padding-x py-5 w-full bg-black">
      <nav className="flex justify-between items-center max-container ">
        <Link href="/">
          <span className="text-3xl text-purple-800 font-extrabold">
            Skate Monkey
          </span>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:underline hover:text-purple-800"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleMenu}
          >
            <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
          {menuOpen && (
            <div
              className="fixed top-0 left-0 h-full w-full bg-white flex flex-col items-center"
              style={{ zIndex: 1000 }}
            >
              <div className="text-right p-4 ml-auto">
                <button onClick={closeMenu}>
                  <Image src={close} alt="Close Icon" width={20} height={20} />
                </button>
              </div>
              <div className="text-center flex-1">
                <ul>
                  {navLinks.map((item) => (
                    <li key={item.label} className="py-4">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="font-montserrat leading-normal text-2xl text-black hover:underline hover:text-purple-800"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

