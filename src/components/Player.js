import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons"


export default function Player({currentSong, setCurrentSong, songs, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo}) {
 //event handlers
  

  const getTime = (time) => {
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }


  const playSongHandler = () => {
    if(isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song)=>song.id===currentSong.id);
    if(direction==="back"){
      await setCurrentSong(songs[currentIndex === 0 ? songs.length-1 : currentIndex - 1]);
      if (isPlaying) audioRef.current.play()
      return;
    }
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play()
  }


  //Add style
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  const gradientStyle = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={gradientStyle} className="track">
          <input 
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnimation}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay} 
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  )
}
