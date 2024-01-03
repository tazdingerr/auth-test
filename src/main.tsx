import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './popa.tsx'

import '@styles/index.css'
import 'react-awesome-button/dist/styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
