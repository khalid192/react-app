import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bc from './bC.jsx'
import './index.css'
import App from './App.jsx'
import Inputfunc from './input.jsx'
import Header from './header.jsx'
import Button from './botton.jsx'
import Aray from './aray.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <Bc />

  </StrictMode>,
)
