import { useContext } from 'react'
import React from 'react'
import { userContext } from './ContextA'

function ContextD() {
  const user = useContext(userContext)
  return (
    <div>
      <h1>Component D</h1>
        <h2>{`Bye ${user}`}</h2>

    </div>

  )
}

export default ContextD