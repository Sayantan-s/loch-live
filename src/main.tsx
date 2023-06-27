import App from '@components/pages/App'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
