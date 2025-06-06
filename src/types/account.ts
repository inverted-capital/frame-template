import { z } from 'zod'

export type UserProfile = {
  name: string
  email: string
  profilePicture: string
}

export type PaymentMethod = {
  id: string
  type: string
  name: string
  value: string
  isConnected: boolean
}

export type StorageUsage = {
  gained: number
  lost: number
  gainedCost: number
  lostRefund: number
}

export type UsageRecord = {
  period: string
  storage: StorageUsage
  compute: number
  computeCost: number
  bandwidth: number
  bandwidthCost: number
  aiTokens: number
  aiTokensCost: number
}

export type BillingData = {
  balance: number
  currency: string
  usageHistory: UsageRecord[]
}

export type AccountData = {
  user: UserProfile
  paymentMethods: PaymentMethod[]
  billing: BillingData
}

const userProfileSchema: z.ZodType<UserProfile> = z.object({
  name: z.string(),
  email: z.string().email(),
  profilePicture: z.string()
})

const paymentMethodSchema: z.ZodType<PaymentMethod> = z.object({
  id: z.string(),
  type: z.string(),
  name: z.string(),
  value: z.string(),
  isConnected: z.boolean()
})

const storageUsageSchema: z.ZodType<StorageUsage> = z.object({
  gained: z.number(),
  lost: z.number(),
  gainedCost: z.number(),
  lostRefund: z.number()
})

const usageRecordSchema: z.ZodType<UsageRecord> = z.object({
  period: z.string(),
  storage: storageUsageSchema,
  compute: z.number(),
  computeCost: z.number(),
  bandwidth: z.number(),
  bandwidthCost: z.number(),
  aiTokens: z.number(),
  aiTokensCost: z.number()
})

const billingDataSchema: z.ZodType<BillingData> = z.object({
  balance: z.number(),
  currency: z.string(),
  usageHistory: z.array(usageRecordSchema)
})

export const accountDataSchema: z.ZodType<AccountData> = z.object({
  user: userProfileSchema,
  paymentMethods: z.array(paymentMethodSchema),
  billing: billingDataSchema
})

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
