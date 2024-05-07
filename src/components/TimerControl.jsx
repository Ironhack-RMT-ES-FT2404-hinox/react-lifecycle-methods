import React, { useState } from 'react'
import Timer from './Timer'

function TimerControl() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  const handleToggle = () => {
    setIsTimerShowing(!isTimerShowing)
  }

  return (
    <div>
      
      <button onClick={handleToggle}>Mostrar Timer</button>

      { isTimerShowing === true ? <Timer setIsTimerShowing={setIsTimerShowing}/> : null }

    </div>
  )
}

export default TimerControl