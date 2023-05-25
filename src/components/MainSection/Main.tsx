"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Playlist, { SongProps } from "../Music";
import Logo from "../../../public/cover.jpg";
import { useEffect, useState } from "react";

type Edge = {
  id: number;
  vertices: SongProps[];
  value: number;
};

/**
 * Pesos das semelhanças:
 * Artista: 3,
 * Album: 2,
 * Genero: 1,
 */
const songsArray: SongProps[] = [
  {
    id: 1,
    src: Logo,
    song: `Papi's Home`,
    artist: "Drake",
    album: "Certified Lover Boy",
    genre: "Rap",
    duration: "3:51",
  },

  {
    id: 2,
    src: Logo,
    song: `Search and Rescue`,
    artist: "Drake",
    album: "Search and Rescue",
    genre: "Rap",
    duration: "4:32",
  },

  {
    id: 3,
    src: Logo,
    song: `All my life`,
    artist: "Lil Durk, J. Cole",
    album: "All my life",
    genre: "Trap",
    duration: "3:43",
  },

  {
    id: 4,
    src: Logo,
    song: `Trance`,
    artist: "Metro Booming",
    album: "HEROES & VILLAINS",
    genre: "Trap",
    duration: "3:14",
  },

  {
    id: 6,
    src: Logo,
    song: `De alta`,
    artist: "Matue",
    album: "De alta",
    genre: "Rap",
    duration: "4:32",
  },

  {
    id: 7,
    src: Logo,
    song: `Maquina do tempo`,
    artist: "Matue",
    album: "Maquina do tempo",
    genre: "Trap",
    duration: "3:43",
  },

  {
    id: 8,
    src: Logo,
    song: `É sal`,
    artist: "Matue",
    album: "Maquina do tempo",
    genre: "Trap",
    duration: "3:43",
  },
  {
    id: 9,
    src: Logo,
    song: `Stitches`,
    artist: "Shawn Mendes",
    album: "Stitches",
    genre: "Pop",
    duration: "3:43",
  },

  {
    id: 10,
    src: Logo,
    song: `Nav`,
    artist: "Jovem dex",
    album: "Nav",
    genre: "Trap",
    duration: "4:32",
  },
];

export default function MainSection() {
  const [playlist, setPlaylist] = useState<SongProps[]>([]);
  const [similars, setSimilars] = useState<SongProps[]>(songsArray);

  const generateEdges = () => {
    return songsArray
      .reduce<Edge[]>((acc, song, cIndex) => {
        for (let i = cIndex + 1; i < songsArray.length - 1; i++) {
          let value = 0;
          if (song.artist === songsArray[i].artist) {
            value += 3;
          }
          if (song.album === songsArray[i].album) {
            value += 2;
          }
          if (song.genre === songsArray[i].genre) {
            value += 1;
          }

          acc.push({
            id: cIndex + i + value,
            vertices: [song, songsArray[i]],
            value,
          });
        }
        return acc;
      }, [])
      .sort((a, b) => a.value - b.value)
      .reverse();
  };

  const generateNewSimilars = () => {
    const edges = generateEdges();
    const sortedEdges = () => {
      let newSortedEdges: Edge[] = [];
      edges.forEach((edge) => {
        if (
          (playlist.some(({ id }) => id === edge.vertices[0].id) ||
          playlist.some(({ id }) => id === edge.vertices[0].id) &&
            !newSortedEdges.some(({ id }) => id === edge.id))
        ) {
          newSortedEdges.unshift(edge);
        } else if (!newSortedEdges.some(({ id }) => id === edge.id)) {
          newSortedEdges.push(edge);
        }
      });
      return newSortedEdges;
    };

    console.log(sortedEdges());

    return sortedEdges()
      .reduce<SongProps[]>((acc, edge) => {
        if (
          !playlist.some(({ id }) => id === edge.vertices[0].id) &&
          !acc.some(({ id }) => id === edge.vertices[0].id)
        ) {
          acc.push(edge.vertices[0]);
        }

        if (
          !playlist.some(({ id }) => id === edge.vertices[1].id) &&
          !acc.some(({ id }) => id === edge.vertices[1].id)
        ) {
          acc.push(edge.vertices[1]);
        }
        return acc;
      }, [])
      .reverse();
  };

  const removeSong = (song: SongProps) => {
    setPlaylist((oldState) => oldState.filter((p) => p.id !== song.id));
    setSimilars((oldState) => [...oldState, song]);
  };

  const addSong = (song: SongProps) => {
    setPlaylist((oldState) => [...oldState, song]);
    setSimilars((oldState) => oldState.filter((p) => p.id !== song.id));
  };

  useEffect(() => {
    const newSimilars = generateNewSimilars();
    setSimilars([...newSimilars]);
  }, [playlist]);

  return (
    <main className="flex-1 p-6 max-h-[89.5vh] overflow-y-auto">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>

        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-around flex-1 w-full">
        <div className="flex flex-col flex-1 w-1/2 mr-12">
          <h1 className="font-semibold text-3xl mt-10">Playlist</h1>
          <Playlist type="playlist" songsArray={playlist} onAdd={removeSong} />
        </div>

        <div className="flex flex-col flex-2 w-1/2">
          <h1 className="font-semibold text-3xl mt-10">Recomendações</h1>
          <Playlist
            type="recomendation"
            songsArray={similars}
            onAdd={addSong}
          />
        </div>
      </div>
    </main>
  );
}
