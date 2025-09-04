import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <nav className='font-secondary'>Navbarr</nav>
    <main className='min-h-screen max-w-3xl py-4 mx-auto px-6 font-primary border '>

    <Outlet />
    </main>
    <footer>Foooter senction</footer>
    </>
  )
}

export default App
