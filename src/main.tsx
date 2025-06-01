import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArtifactFrame } from '@artifact/client/react'
import App from './App.tsx'
import { AccountViewSkeleton } from './views'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtifactFrame placeholder={<AccountViewSkeleton />}>
      <App />
    </ArtifactFrame>
  </StrictMode>
)
