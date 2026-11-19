import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounter from './counter' 
import EmojiCounter from './Weathermood.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ClickCounter/> 
      <EmojiCounter pic='rainy'/> 
<EmojiCounter pic='sunny'/> 
<EmojiCounter pic='cloudy'/> 
  </StrictMode>,
)
