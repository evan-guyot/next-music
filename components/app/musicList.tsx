"use client";

import { Song, mockedSongs } from "@/lib/songs/songs";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const MusicList = (props: { filter: string }) => {
  const { filter } = props;
  const [songs, setSongs] = useState<Song[] | undefined>(mockedSongs);

  useEffect(() => {
    const filteredSongs = mockedSongs.filter((song) =>
      song.title.toLowerCase().includes(filter.toLowerCase())
    );
    setSongs(filteredSongs);
  }, [filter]);

  return songs ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead className="text-right">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((song, index) => (
          <TableRow key={index} className="cursor-pointer">
            <TableCell className="font-medium">{song.title}</TableCell>
            <TableCell className="font-medium">{song.author}</TableCell>
            <TableCell className="font-medium">{song.genre}</TableCell>
            <TableCell className="font-medium text-right">
              {song.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <p>not loaded yet </p>
  );
};
