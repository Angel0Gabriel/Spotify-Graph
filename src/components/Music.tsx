import { MinusCircle, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

import Logo from '../../public/cover.jpg'

interface SongProps {
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
}

export default function Music({ type }: PlaylistType) {
  const songsArray: SongProps[] = [
    {
      id: 1,
      src: Logo,
      song: `Papi's Home`,
      artist: 'Drake',
      album: 'Certified Lover Boy',
      genre: 'Rap',
      duration: '3:51',
    },

    {
      id: 2,
      src: Logo,
      song: `Search and Rescue`,
      artist: 'Drake2',
      album: 'Search and Rescue',
      genre: 'Rap',
      duration: '4:32',
    },

    {
      id: 3,
      src: Logo,
      song: `All my life`,
      artist: 'Lil Durk, J. Cole',
      album: 'All my life',
      genre: 'Trap',
      duration: '3:43',
    },

    {
      id: 4,
      src: Logo,
      song: `Trance`,
      artist: 'Metro Booming',
      album: 'HEROES & VILLAINS',
      genre: 'Trap',
      duration: '3:14',
    },
    {
      id: 5,
      src: Logo,
      song: `Papi's Home`,
      artist: 'Drake',
      album: 'Certified Lover Boy',
      genre: 'Rap',
      duration: '3:51',
    },

    {
      id: 6,
      src: Logo,
      song: `Search and Rescue`,
      artist: 'Drake2',
      album: 'Search and Rescue',
      genre: 'Rap',
      duration: '4:32',
    },

    {
      id: 7,
      src: Logo,
      song: `All my life`,
      artist: 'Lil Durk, J. Cole',
      album: 'All my life',
      genre: 'Trap',
      duration: '3:43',
    },

    {
      id: 8,
      src: Logo,
      song: `Trance`,
      artist: 'Metro Booming',
      album: 'HEROES & VILLAINS',
      genre: 'Trap',
      duration: '3:14',
    },
    {
      id: 9,
      src: Logo,
      song: `Papi's Home`,
      artist: 'Drake',
      album: 'Certified Lover Boy',
      genre: 'Rap',
      duration: '3:51',
    },

    {
      id: 10,
      src: Logo,
      song: `Search and Rescue`,
      artist: 'Drake2',
      album: 'Search and Rescue',
      genre: 'Rap',
      duration: '4:32',
    },

    {
      id: 11,
      src: Logo,
      song: `All my life`,
      artist: 'Lil Durk, J. Cole',
      album: 'All my life',
      genre: 'Trap',
      duration: '3:43',
    },

    {
      id: 12,
      src: Logo,
      song: `Trance`,
      artist: 'Metro Booming',
      album: 'HEROES & VILLAINS',
      genre: 'Trap',
      duration: '3:14',
    },
    {
      id: 13,
      src: Logo,
      song: `Papi's Home`,
      artist: 'Drake',
      album: 'Certified Lover Boy',
      genre: 'Rap',
      duration: '3:51',
    },

    {
      id: 14,
      src: Logo,
      song: `Search and Rescue`,
      artist: 'Drake2',
      album: 'Search and Rescue',
      genre: 'Rap',
      duration: '4:32',
    },

    {
      id: 15,
      src: Logo,
      song: `All my life`,
      artist: 'Lil Durk, J. Cole',
      album: 'All my life',
      genre: 'Trap',
      duration: '3:43',
    },

    {
      id: 16,
      src: Logo,
      song: `Trance`,
      artist: 'Metro Booming',
      album: 'HEROES & VILLAINS',
      genre: 'Trap',
      duration: '3:14',
    },
  ]

  // const [songs, setSongs] = useState<SongProps[]>()

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
            ({ artist, album, duration, genre, id, song }, index) => {
              return (
                <tr
                  key={id}
                  className="bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <td className="">
                    <Image
                      className="rounded-sm"
                      src={Logo}
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
                        <button className="hover:text-red-400">
                          <MinusCircle />
                        </button>
                      ) : (
                        <button className="hover:text-green-400">
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
