import { useState } from 'react'
import './App.css'

export default function App() {
  const [color, setColor] = useState('')

  const generateColor = () => {
    let sorteio = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase()
    return sorteio
  }

  const changeColor = () =>{
    let result = '#' + generateColor()
    document.body.style.backgroundColor = result
    setColor(result)
  }

  const cleanColor = () =>{
    if(color !== ''){
      setColor('#FFFFFF')
      document.body.style.backgroundColor = '#FFFFFF'
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
    alert('Copied to clipboard')
  }

  return (
    <div>
      <h1>Color Generator</h1>
      <div className='container'>
        <button onClick={() => changeColor()}>
          Generate
        </button>

        <button className='resultado' onClick={() => copyToClipboard(color)} title='Copy to clipboard'>
        {color}
        </button>

        <button onClick={() => cleanColor()}>
          Clear
        </button>
      </div>

    </div>
  );
}


