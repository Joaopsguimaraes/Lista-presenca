import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import "../src/styles/global.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
