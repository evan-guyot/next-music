"use client";

import { MusicList } from "@/components/app/musicList";
import { SearchBar } from "@/components/app/searchBar";
import { useState } from "react";

export default function Home() {
  const [contains, setContains] = useState<string>("");

  const handleChangeContains = (value: string) => {
    setContains(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SearchBar onChange={handleChangeContains} />
      <MusicList filter={contains} />
    </main>
  );
}
