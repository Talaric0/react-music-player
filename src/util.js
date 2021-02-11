export const playAudio = (isPlaying, audioRef) => {
  if(isPlaying){
    const playPromise = audioRef.current.play()
    if(playPromise) {
      playPromise.then(() => {
        setTimeout(() => {audioRef.current.play()}, 500);
      })
    }
  }
}