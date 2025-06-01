# widget-account-panel

## Development

Run the dev server using HTTP (works in StackBlitz):

```bash
npm run dev
```

To start with HTTPS using mkcert on your local machine, run:

```bash
npm run dev:https
```

This sets the `USE_MKCERT` environment variable so the Vite config enables the SSL setup.

## Embedding with ArtifactFrameHolder

After building the widget you can mount it inside another application using the
`ArtifactFrameHolder` component from `@artifact/client/react`.

Run the following command to produce the `dist/` directory with the compiled
artifact:

```bash
npm run build
```

Then load `dist/index.html` in your host application:

```tsx
import { ArtifactFrameHolder } from '@artifact/client/react'

export default function AccountPanel() {
  return (
    <ArtifactFrameHolder
      src="/path/to/widget-account-panel/dist/index.html"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
```

`ArtifactFrameHolder` renders an internal `ArtifactFrame`. The frame displays a
skeleton placeholder until the widget is fully loaded.

### Account data shape

The widget expects account details in the following structure as defined in
`src/types/account.ts`:

```ts
export interface UserProfile {
  name: string
  email: string
  profilePicture: string
}

export interface PaymentMethod {
  id: string
  type: string
  name: string
  value: string
  isConnected: boolean
}

export interface StorageUsage {
  gained: number
  lost: number
  gainedCost: number
  lostRefund: number
}

export interface UsageRecord {
  period: string
  storage: StorageUsage
  compute: number
  computeCost: number
  bandwidth: number
  bandwidthCost: number
  aiTokens: number
  aiTokensCost: number
}

export interface BillingData {
  balance: number
  currency: string
  usageHistory: UsageRecord[]
}

// Account object
const accountData: {
  user: UserProfile
  paymentMethods: PaymentMethod[]
  billing: BillingData
} = {
  user: { name: '', email: '', profilePicture: '' },
  paymentMethods: [],
  billing: { balance: 0, currency: '', usageHistory: [] }
}
```
