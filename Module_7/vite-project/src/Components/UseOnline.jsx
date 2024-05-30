import { useState } from 'react'
import { useEffect } from 'react'

function UseOnline() {
  const[isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => setIsOnline(true))
        window.addEventListener("offline", () => setIsOnline(false))
    })

    
  return (
    <p>hello</p>
    
  )
}

export default UseOnline