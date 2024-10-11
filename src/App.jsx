import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {
  const [time,setTime] = useState(0);
  const butnRef = useRef(null);

  const handleStart = () => {
    butnRef.current = setInterval(()=>{setTime(time => time+1)},100)
  }


  const handlePause = () => {
      clearInterval(butnRef.current)
  }

  const handleReset = () => {
    setTime(0);
    clearInterval(butnRef.current)
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time/10}  seconds</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick = {handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App