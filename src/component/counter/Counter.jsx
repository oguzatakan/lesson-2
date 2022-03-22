import './Counter.css';
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCounter] = useState(0)

  return (
    <div className='counter'>
        <h1>{count} adet</h1>
        <button onClick={() => setCounter(count + 1)}>Arttır</button>
    </div>
  )
}

export default Counter