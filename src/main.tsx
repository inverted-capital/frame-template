import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArtifactFrame } from '@artifact/client/react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtifactFrame placeholder={<App skeleton />}>
      <App />
    </ArtifactFrame>
  </StrictMode>
)
