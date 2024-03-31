"use client";

import { ISong } from "@/lib/songs/songs";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from "axios";
import { useSongContext } from "./providers/songProvider";
import { formatTime } from "@/functions/time";

export const MusicList = (props: { filter: string }) => {
  const { filter } = props;

  const { changeSong } = useSongContext();

  const [fetchedSongs, setFetchedSongs] = useState<ISong[]>();
  const [songs, setSongs] = useState<ISong[]>();
  const [error, setError] = useState<boolean>(false);

  const handleMusicClicked = (id: number) => {
    const fetchSong = async () => {
      try {
        const response = await axios.get<ISong>(`/api/songs/${id}`);
        changeSong(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchSong();
  };

  useEffect(() => {
    if (fetchedSongs) {
      const filteredSongs = fetchedSongs.filter((song) =>
        song.title.toLowerCase().includes(filter.toLowerCase())
      );
      setSongs(filteredSongs);
    }
  }, [filter, fetchedSongs]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ songs: ISong[] }>("/api/songs");
        setFetchedSongs(response.data.songs);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

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
          <TableRow
            key={index}
            className="cursor-pointer"
            onClick={() => handleMusicClicked(song.id)}
          >
            <TableCell className="font-medium">{song.title}</TableCell>
            <TableCell className="font-medium">{song.author}</TableCell>
            <TableCell className="font-medium">{song.genre}</TableCell>
            <TableCell className="font-medium text-right">
              {formatTime(song.time)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <p>Loading....</p>
  );
};
