import React from 'react'
import ContextC from './ContextC'
import { useContext } from 'react'
import { MyThemeContext } from './MyThemeProvider'

function ContextB() {
  // to use this context in a component, first employ useContext hook
 const {theme, setTheme, darkMode} = useContext(MyThemeContext);
  return (
    <div style={{background: theme.background, color: theme.foreground}}>
        <h1>Component B</h1>
        <ContextC></ContextC>
        </div>
  )
}

export default ContextB