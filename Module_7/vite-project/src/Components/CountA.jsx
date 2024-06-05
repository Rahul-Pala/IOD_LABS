import React from 'react'
import useCounter from './useCounter'

function CountA() {
    const {count, Increment, Decrement} = useCounter(0)


  return (
    <div>
        {count}
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
        

    </div>
  )
}

export default CountA