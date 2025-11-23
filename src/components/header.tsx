import Link from "next/link";
import { Logo } from "./logo";

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
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <ul className="flex gap-x-6 text-sm">
        {routes.map((route, idx) => {
          return (
            <li key={idx} className="text-white/50 hover:text-white transition">
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
