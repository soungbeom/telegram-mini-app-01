import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import './index.css'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
