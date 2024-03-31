"use client";

import MusicBar from "@/components/app/musicBar";
import { MusicList } from "@/components/app/musicList";
import { useSongContext } from "@/components/app/providers/songProvider";
import { SearchBar } from "@/components/app/searchBar";
import { useState } from "react";

export default function Home() {
  const { song } = useSongContext();

  const [contains, setContains] = useState<string>("");

  const handleChangeContains = (value: string) => {
    setContains(value);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <SearchBar onChange={handleChangeContains} />
        <MusicList filter={contains} />
        {song && (
          <div className="fixed flex justify-center w-full left-0 right-0 bottom-0 border-t-2 border-primary p-4">
            <MusicBar song={song} />
          </div>
        )}
      </main>
    </>
  );
}
