import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './Components/ErrorMessage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Strict Mode does extra checks during development*/}
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App /> {/*App is App.jsx - where all components are rendered*/}
    </ErrorBoundary>
  </React.StrictMode>,
)
