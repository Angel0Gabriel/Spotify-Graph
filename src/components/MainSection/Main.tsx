/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Playlist, { SongProps } from '../Music'
// @ts-ignore
import Logo from '../../../public/cover.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * Pesos das semelhanças:
 * Artista: 3,
 * Album: 2,
 * Genero: 1,
 */

type Edge = {
  id: number
  vertices: SongProps[]
  value: number
}

interface RevelanceSong extends SongProps {
  value: number
}

export default function MainSection() {
  const [playlist, setPlaylist] = useState<SongProps[]>([])
  const [similars, setSimilars] = useState<SongProps[]>([])

  const genres = ['rap', 'trap', 'sertanejo', 'pop', 'mpb', 'rock']

  const SPOTIFY_CLIENT_ID = '43605d8686414032be5dbbb5efe68b77'
  const SPOTIFY_CLIENT_SECRET = '1de9c4f818414f00bd56e3c4cc1b7b21'

  async function getTracks(accessToken: string) {
    try {
      const data = await axios.get(
        'https://api.spotify.com/v1/playlists/3IsxzDS04BvejFJcQ0iVyW',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      const response = data.data.tracks.items as []

      console.log(response)

      const newTracks = response.map<SongProps>((song: any) => {
        return {
          artist: song.track.artists[0]?.name ?? '',
          album: song.track.album?.name ?? '',
          duration: song.track.duration_ms ?? '',
          genre: genres[Math.floor(Math.random() * genres.length)] ?? '',
          id: song.track.id ?? '',
          song: song.track?.name ?? '',
          src: song.track.album.images[0].url ?? '',
        }
      })
      console.log('ola', newTracks)
      setSimilars(newTracks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        SPOTIFY_CLIENT_ID +
        '&client_secret=' +
        SPOTIFY_CLIENT_SECRET,
    }

    fetch('https://accounts.spotify.com/api/token', authParams)
      .then((result) => result.json())
      .then((data) => getTracks(data.access_token))
  }, [])

  // console.log(accessToken)

  const mapSimilarsRelevance = () => {
    return similars
      .map<RevelanceSong>((song) => {
        let value = 0

        playlist.forEach((playlistSong) => {
          if (song.artist === playlistSong.artist) {
            value += 3
          }
          if (song.album === playlistSong.album) {
            value += 2
          }
          if (song.genre === playlistSong.genre) {
            value += 1
          }
        })

        return {
          ...song,
          value,
        }
      })
      .sort((a, b) => b.value - a.value)
  }

  const removeSong = (song: SongProps) => {
    setSimilars((oldState) => [...oldState, song])
    setPlaylist((oldState) => oldState.filter((p) => p.song !== song.song))
  }

  const addSong = (song: SongProps) => {
    setSimilars((oldState) => oldState.filter((p) => p.song !== song.song))
    setPlaylist((oldState) => [...oldState, song])
  }

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
          <Playlist
            type="playlist"
            songsArray={playlist}
            onSongPress={removeSong}
          />
        </div>

        <div className="flex flex-col flex-2 w-1/2">
          <h1 className="font-semibold text-3xl mt-10">Recomendações</h1>
          <Playlist
            type="recomendation"
            songsArray={mapSimilarsRelevance()}
            onSongPress={addSong}
          />
        </div>
      </div>
    </main>
  )
}
