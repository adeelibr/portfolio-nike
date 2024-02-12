import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { IMAGES, NAV_LINKS } from "@/constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={IMAGES.logo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden 2xl:mr-24">
          <Link href="/">Sign in</Link>
          <span>/</span>
          <Link href="/">Explore now</Link>
        </div>
        <div className="hidden max-lg:block">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
