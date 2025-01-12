import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@app/App'

import './index.css'
import 'primeicons/primeicons.css';
    
import "primereact/resources/themes/lara-light-cyan/theme.css";
    

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)