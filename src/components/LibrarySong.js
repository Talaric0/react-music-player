import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) {
  //handlers
  const songSelectHandler = () => {
    setCurrentSong(song)

    //add active state
    const newSongs = songs.map((eachSong) => {
      if(eachSong.id === song.id) {
        return{
          ...eachSong,
          active: true
        }
      } else {
        return {
          ...eachSong,
          active: false
        }
      }
    })
    setSongs(newSongs)

    //check if it's playing
    if(isPlaying){
      const playPromise = audioRef.current.play()
      if(playPromise) {
        playPromise.then(() => {
          setTimeout(() => {audioRef.current.play()}, 500);
        })
      }
    }
  }


  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
