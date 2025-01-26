import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='max-w-screen'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
