
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/home/Footer'

function App() {


  return (
    <div className='max-w-screen-xl mx-auto'>

   
   <Navbar/>
    <main className='min-h-screen mx-auto  px-4 py-6 '>
    <Outlet />
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    
  )
}

export default App
