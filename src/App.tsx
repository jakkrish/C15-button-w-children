import Button from './Button'
import './App.css'
import { useState,useEffect } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black');
  const [showButtons,setShowButtons] = useState(true)

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor
  },[bgColor])

  const changeBG=()=>{
    const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);

  }

  const displayAlert=()=>{
    alert('Hi There')
  }

  const showHide=()=>{
    setShowButtons(prev=>!prev)
  }
 
  return (
    <>
    <Button onClick={showHide}>Show/Hide Buttons</Button>
    {showButtons && <Button onClick={changeBG}>Change BG Color</Button> }
    {showButtons && <Button onClick={displayAlert}>Display Alert</Button>}
    </>
  )
}

export default App
