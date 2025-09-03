import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <nav className='font-secondary'>Navbarr</nav>
    <Outlet/>
    <footer>Foooter senction</footer>
    </>
  )
}

export default App
