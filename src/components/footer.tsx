import Link from "next/link";

const routes = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/30">
      <small className="text-sm">&copy; 2050 VTR. All rights reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route, idx) => {
          return (
            <li className="" key={`${idx}_${route.path}`}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
