import React, { useEffect, useRef, useState } from 'react'

const CountDown = () => {
    const [value, setValue] = useState()
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    const decrement = () => {
        setTimer(prev => prev -1)
    }
    const countDownTimer = () => {
        if (value > 0) {
            setTimer(value);
            intervalRef.current = setInterval(decrement,1000)
        } else {
            setTimer(0)
        }
    }

    useEffect(() => {
        if (timer === 0) clearInterval(intervalRef.current)
    }, [timer])

  return (
    <div className=' text-center'>
        <h1 
        className='font-extrabold text-purple-600 m-8 text-3xl'
        >CountDown Timer</h1>
      <div>
        <input
        className='border-blue-400 border-b-2 mr-8 hover:bg-slate-100' 
        id='timeCount' 
        type='number' 
        placeholder='Enter number in sec...'
        onChange={(e) => setValue(Math.floor(e.target.value))}
        // value={value}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                countDownTimer()
            }
        }}
        />
        {/* <button 
        className=' text-red-600 font-bold'
        onClick={countDownTimer}
        >Start</button> */}
      </div>
      <div className='font-bold text-xl mt-10 font-mono text-red-600' id='current-time'>{timer}</div>
    </div>
  )
}

export default CountDown

