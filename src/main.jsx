import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Accordion from './App.jsx'
import Randomcolor from './components/random-color/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Accordion /> */}
    <Randomcolor />
  </StrictMode>,
)
