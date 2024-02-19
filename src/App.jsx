import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar';
import MainContent from './assets/components/MainContent'

function App() {
  const [mode, setMode] = useState(false)

  function toggleMode() {
    setMode(prevMode => {
       return !prevMode
    })
  }
  
  console.log(mode)

  return (
    <>
      <Navbar darkMode={mode} toggleMode={toggleMode} />
      <MainContent darkMode={mode}/>
    </>
  );
}

export default App
