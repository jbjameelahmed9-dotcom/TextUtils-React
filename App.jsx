// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  return (
    <>
      <Navbar/>
      <div className="container my-3">
      <TextForm heading="Enter the Text"/>
      </div>
    </>
  )
}

export default App
