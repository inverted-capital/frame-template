// Mock data for user account
export const mockUserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: ''
}

// Mock data for payment methods
export const mockPaymentMethods = [
  {
    id: 'eth1',
    type: 'ethereum',
    name: 'Ethereum Wallet',
    value: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    isConnected: true
  },
  {
    id: 'wise1',
    type: 'wise',
    name: 'Wise Account',
    value: 'john.doe@example.com',
    isConnected: true
  },
  {
    id: 'bank1',
    type: 'bank',
    name: 'Bank Account',
    value: 'XXXX-XXXX-XXXX-4321',
    isConnected: false
  }
]

// Mock billing data
export const mockBillingData = {
  balance: 125.78,
  currency: 'USD',
  usageHistory: [
    {
      period: '2023-06-01',
      storage: {
        gained: 1.23, // GB
        lost: 0.34, // GB
        gainedCost: 0.62, // USD
        lostRefund: 0.17 // USD
      },
      compute: 420, // Processor units
      computeCost: 0.84,
      bandwidth: 5.67, // GB
      bandwidthCost: 1.13,
      aiTokens: 15320, // Tokens
      aiTokensCost: 0.31
    },
    {
      period: '2023-05-01',
      storage: {
        gained: 2.45, // GB
        lost: 0.12, // GB
        gainedCost: 1.23, // USD
        lostRefund: 0.06 // USD
      },
      compute: 830, // Processor units
      computeCost: 1.66,
      bandwidth: 12.34, // GB
      bandwidthCost: 2.47,
      aiTokens: 45670, // Tokens
      aiTokensCost: 0.91
    },
    {
      period: '2023-04-01',
      storage: {
        gained: 0.87, // GB
        lost: 1.45, // GB
        gainedCost: 0.44, // USD
        lostRefund: 0.73 // USD
      },
      compute: 640, // Processor units
      computeCost: 1.28,
      bandwidth: 8.92, // GB
      bandwidthCost: 1.78,
      aiTokens: 28940, // Tokens
      aiTokensCost: 0.58
    }
  ]
}
