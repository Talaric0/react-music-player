import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) {
  return (
    <div className={libraryStatus ? "active-library library" : "library"}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong 
            isPlaying={isPlaying}
            audioRef={audioRef}
            song={song} 
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  )
}
