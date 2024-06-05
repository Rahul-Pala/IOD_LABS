import React from 'react'
import UseOnline from './UseOnline'

function B() {
  return (
    <div>B - {UseOnline() ? "Online" : "Offline"}</div>
  )
}

export default B