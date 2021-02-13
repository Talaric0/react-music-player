import React, { useState, useRef } from "react";

//import styles
import './styles/app.scss'

//import components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
//import util
import data from './data'

function App() {
  //Ref
  const audioRef = useRef(null)

  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  //handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration

    //calculate percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    console.log(animation);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    })
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song)=>song.id===currentSong.id);
    await setCurrentSong(songs[currentIndex === 0 ? songs.length-1 : currentIndex - 1]);
    if (isPlaying) audioRef.current.play()
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      />
      <Song 
        currentSong={currentSong}
        isPlaying={isPlaying} 
      />
      <Player 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <Library
        libraryStatus={libraryStatus}
        currentSong={currentSong}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      >
      </audio>
    </div>
  );
}

export default App;
