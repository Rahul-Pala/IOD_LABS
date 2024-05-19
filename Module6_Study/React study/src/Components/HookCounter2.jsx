import { useState } from "react"

function HookCounter2() {
  const initialcount = 0
  const [count, setcount] = useState(initialcount)

  const Incrementfive=() => {
    for (let i = 0; i < 5; i++) {
        setcount(prevcount => prevcount + 1)
    }
 }

    return (
    <div>
        Count: {count}
        <button onClick={() => setcount(initialcount)}>Reset</button>
        <button onClick={() => setcount(prevcount => prevcount + 1)}>Increment</button>
        <button onClick={() => setcount(prevcount => prevcount - 1)}>Decrement</button>
        <button onClick={Incrementfive}>Incement by 5</button>
    </div>
  )
}

export default HookCounter2