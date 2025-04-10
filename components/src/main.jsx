import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClassComponent } from './ClassComponent.jsx'

const name = "Sanjai😎";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassComponent name={name} />
    {/* {new ClassComponent(data).render()} */}
  </StrictMode>,
)
