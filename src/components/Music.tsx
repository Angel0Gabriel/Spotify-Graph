import { MinusCircle, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export interface SongProps {
  id: number
  src: any
  song: string
  artist: string
  album: string
  genre: string
  duration: string
}

interface PlaylistType {
  type: 'playlist' | 'recomendation'
  songsArray: SongProps[]
  onSongPress: (song: SongProps) => void
}

export default function Playlist({ type, songsArray, onSongPress: onAdd }: PlaylistType) {
  return (
    <>
      <table className="text-left mt-6">
        <thead className="">
          <tr>
            <th className="font-normal text-left">Cover</th>
            <th className="font-normal">Song/Artist</th>
            <th className="font-normal">Album</th>
            <th className="font-normal">Genre</th>
            <th className="font-normal">Duration</th>
          </tr>
        </thead>
        <tbody className="before:content-['.'] before:text-zinc-900">
          {songsArray.map(
            ({ artist, album, duration, genre, id, song, src }, index) => {
              return (
                <tr
                  key={id}
                  className="bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <td className="">
                    <Image
                      className="rounded-sm"
                      src={src}
                      width={104}
                      height={104}
                      alt=""
                    />
                  </td>
                  <td className="w-1/4">
                    <div className="flex flex-col gap-1">
                      <strong>{song}</strong>
                      <span className="text-sm text-zinc-400">{artist}</span>
                    </div>
                  </td>
                  <td className="text-sm text-zinc-400 w-1/5">{album}</td>
                  <td className="text-sm text-zinc-400 w-1/5">{genre}</td>
                  <td className="text-sm text-zinc-400 w-1/5">
                    <div className="flex gap-20">
                      <span>{duration}</span>
                      {type === 'playlist' ? (
                        <button
                          className="hover:text-red-400"
                          onClick={() =>
                            onAdd({
                              artist,
                              album,
                              duration,
                              genre,
                              id,
                              song,
                              src,
                            })
                          }
                        >
                          <MinusCircle />
                        </button>
                      ) : (
                        <button
                          className="hover:text-green-400"
                          onClick={() =>
                            onAdd({
                              artist,
                              album,
                              duration,
                              genre,
                              id,
                              song,
                              src,
                            })
                          }
                        >
                          <PlusCircle />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )
            },
          )}
        </tbody>
      </table>
    </>
  )
}
