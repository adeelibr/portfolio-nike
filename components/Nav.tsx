import * as React from "react";
import Image from "next/image";

import { Menu } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { IMAGES, NAV_LINKS } from "@/constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/">
          <Image
            src={IMAGES.logo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden 2xl:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <Menu className="h-5 w-5" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
