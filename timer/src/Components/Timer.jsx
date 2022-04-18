import React, { useEffect, useState } from 'react'
import "./Timer.css"

const Timer = () => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    let timer;
    useEffect(() => {
        timer=setInterval(() => {
            setSec(sec + 1)
            if (setSec === 59) {
                setMin(min + 1)
                setSec(0)
                
            }
        }, 1000);
        return ()=>clearInterval(timer)
    })
    const handleRes = () => {
        setMin(0)
        setSec(0)
    }
    const handleStop = () => {
        clearInterval(timer)
    }

  return (
    <div>
      <div className='maindiv'>
        <h1 className="timer">Timer</h1>
      </div>
      <div className="minsec">
        <h2>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </h2>
      </div>
      <button onClick={handleRes}>Restart</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}

export default Timer
