import React from 'react'
import {playAudio} from '../util'

export default function LibrarySong({song, songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs}) {
  //handlers
  const songSelectHandler = () => {
    setCurrentSong(song)

    //check if it's playing
    playAudio(isPlaying, audioRef)
  }


  return (
    <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
