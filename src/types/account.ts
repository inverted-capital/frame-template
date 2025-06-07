import { z } from 'zod'

export const userProfileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  profilePicture: z.string()
})
export type UserProfile = z.infer<typeof userProfileSchema>

export const paymentMethodSchema = z.object({
  id: z.string(),
  type: z.string(),
  name: z.string(),
  value: z.string(),
  isConnected: z.boolean()
})
export type PaymentMethod = z.infer<typeof paymentMethodSchema>

export const storageUsageSchema = z.object({
  gained: z.number(),
  lost: z.number(),
  gainedCost: z.number(),
  lostRefund: z.number()
})
export type StorageUsage = z.infer<typeof storageUsageSchema>

export const usageRecordSchema = z.object({
  period: z.string(),
  storage: storageUsageSchema,
  compute: z.number(),
  computeCost: z.number(),
  bandwidth: z.number(),
  bandwidthCost: z.number(),
  aiTokens: z.number(),
  aiTokensCost: z.number()
})
export type UsageRecord = z.infer<typeof usageRecordSchema>

export const billingDataSchema = z.object({
  balance: z.number(),
  currency: z.string(),
  usageHistory: z.array(usageRecordSchema)
})
export type BillingData = z.infer<typeof billingDataSchema>

export const accountDataSchema = z.object({
  user: userProfileSchema,
  paymentMethods: z.array(paymentMethodSchema),
  billing: billingDataSchema
})

export type AccountData = z.infer<typeof accountDataSchema>

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
