import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArtifactFrame, ArtifactSyncer } from '@artifact/client/react'
import { HOST_SCOPE } from '@artifact/client/api'
import App from './App.tsx'
import type { AccountData } from './types/account'
import './index.css'

const mockProfile: AccountData = {
  user: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    profilePicture: 'https://example.com/avatar.jpg'
  },
  paymentMethods: [
    {
      id: 'ethereum1',
      type: 'ethereum',
      name: 'Ethereum Wallet',
      value: '0x123...abc',
      isConnected: true
    }
  ],
  billing: {
    balance: 25,
    currency: 'USD',
    usageHistory: []
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtifactFrame
      placeholder={<App skeleton />}
      mockFiles={{ 'profile.json': mockProfile }}
      mockFrameProps={{
        target: { did: HOST_SCOPE.did, repo: 'mock', branch: 'main' }
      }}
    >
      <ArtifactSyncer>
        <App />
      </ArtifactSyncer>
    </ArtifactFrame>
  </StrictMode>
)
