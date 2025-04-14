import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ClassComponent } from './ClassComponent.jsx'
import { FunctionalComponent } from './FunctionalComponent.jsx'

const name = "Sanjai😎";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClassComponent name={name} /> */}
    <FunctionalComponent />
    {/* {new ClassComponent(data).render()} */}
  </StrictMode>,
)
