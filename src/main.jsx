import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// GitHub Pages SPA fallback: если мы пришли через 404.html,
// сессия хранит исходный адрес — восстанавливаем его в истории,
// чтобы BrowserRouter открыл правильный маршрут.
const redirect = sessionStorage.getItem('ghpages-redirect')
if (redirect) {
  sessionStorage.removeItem('ghpages-redirect')
  const base = '/Site_web_Vibe_coding/'
  window.history.replaceState(null, '', base + redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
