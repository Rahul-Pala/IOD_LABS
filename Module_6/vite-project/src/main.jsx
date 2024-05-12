import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Strict Mode does extra checks during development*/}
    <App /> {/*App is App.jsx - where all components are rendered*/}
  </React.StrictMode>,
)
