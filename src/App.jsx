import { useState } from "react";
import './App.css'

export default function App() {
  const [valor, setValor] = useState(0);
  
  const [pare, setPare] = useState()

  const start = () => {
    const time = setInterval(() => {
      setValor(valor => valor + 1);
    }, 1000)

    setPare(time)
  }

  const stop = () => {
    clearInterval(pare)
  }

  const reset = () => {
    setValor(0)
  }

  return (
    <div>
      <h2>Tempo: {valor}</h2>

      <div className="boxButton">
        <button id="button1" onClick={start}>Start</button>
        <button id="button2" onClick={stop}>Stop</button>
        <button id="button3" onClick={reset}>Reset</button>
      </div>
    </div>
  );
} 
