import { useState } from 'react'
import './App.css'
import HookCounter from './Components/HookCounter'
import HookCounter2 from './Components/HookCounter2'
import HookCounter3 from './Components/HookCounter3'
import HookCounter4 from './Components/HookCounter4'
import HookMouse from './Components/HookMouse'

function App() {
  

  return (
    <>
    <HookMouse></HookMouse>
    <HookCounter4></HookCounter4>
    {/* <HookCounter3></HookCounter3> */}
    <HookCounter2></HookCounter2>
    <HookCounter></HookCounter>
    </>
  )
}

export default App
