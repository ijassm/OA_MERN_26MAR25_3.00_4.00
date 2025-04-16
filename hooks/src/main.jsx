import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseState } from './UseState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseState />
  </StrictMode>,
)
