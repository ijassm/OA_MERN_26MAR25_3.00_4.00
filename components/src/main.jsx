import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClassComponent } from './ClassComponent.jsx'

const data = "Hello React! - Props";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassComponent data={data} />
    {/* {new ClassComponent(data).render()} */}
  </StrictMode>,
)
