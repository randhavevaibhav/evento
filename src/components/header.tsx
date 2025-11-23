import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href={`/`}>Home</Link>
      <Link href={`/events/all`}>All Events</Link>
    </header>
  );
};
