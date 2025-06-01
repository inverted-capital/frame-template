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

// Example account object shape
// const AccountData: {
//   user: UserProfile
//   paymentMethods: PaymentMethod[]
//   billing: BillingData
// } = {
//   user: { name: '', email: '', profilePicture: '' },
//   paymentMethods: [],
//   billing: { balance: 0, currency: '', usageHistory: [] }
// }
