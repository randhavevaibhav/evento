"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        type="text"
        placeholder="Search events in any city..."
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 ring-accent focus:ring-1 transition focus:bg-white/10 outline-none"
        spellCheck={false}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
    </form>
  );
};
