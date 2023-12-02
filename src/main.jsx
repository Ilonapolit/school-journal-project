import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import GlobalCss from "./assets/global.styled.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <GlobalCss/>
    <App />
    </GlobalProvider>
  </React.StrictMode>,
)
