"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/util";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route, idx) => {
            return (
              <li
                key={idx}
                className={cn(
                  ` hover:text-white flex items-center transition relative`,
                  {
                    "text-white": activePathname === route.path,
                    "text-white/50": activePathname != route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activePathname === route.path ? (
                  <motion.div
                    layoutId="header-link"
                    className="h-1 bg-accent w-full absolute bottom-0"
                  ></motion.div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
