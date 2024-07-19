import React, { useContext } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Player from './components/Player.jsx'
import Display from './components/Display.jsx'
import { PlayerContext } from './context/PlayerContext.jsx'

const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex '>
        <Sidebar />
        <Display/>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
