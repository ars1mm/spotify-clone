import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Player from './components/Player.jsx'
import Display from './components/Display.jsx'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex '>
        <Sidebar />
        <Display/>
      </div>
      <Player />
    </div>
  )
}

export default App
