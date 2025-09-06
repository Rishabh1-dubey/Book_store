
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-screen-xl mx-auto'>

   
   <Navbar/>
    <main className='min-h-screen mx-auto  px-4 py-6 '>
    <Outlet />
    </main>
    <footer>Foooter senction</footer>
    </div>
    
  )
}

export default App
