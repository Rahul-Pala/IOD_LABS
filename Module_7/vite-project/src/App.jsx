import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseOnline from './Components/UseOnline'
import BitcoinRates from './Components/BitcoinRates'
import BitcoinRatesEx2 from './Components/BitcoinRatesEx2'

function App() {
  

  return (
    <>
    <BitcoinRatesEx2></BitcoinRatesEx2>
    <BitcoinRates></BitcoinRates>
    <UseOnline></UseOnline>
    </>
  )
}

export default App
