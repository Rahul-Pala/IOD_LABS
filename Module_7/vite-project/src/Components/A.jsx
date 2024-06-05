import React from 'react'
import UseOnline from './UseOnline'

function A() {
    UseOnline()
  return (
    <div>A - {UseOnline() ? "🟢": "🔴"}</div>
  )
}

export default A