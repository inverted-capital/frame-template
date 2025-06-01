import { useEffect, useState } from 'react'
import type { BillingData, PaymentMethod, UserProfile } from '../types/account'

export interface AccountData {
  user: UserProfile
  paymentMethods: PaymentMethod[]
  billing: BillingData
}

const useAccountData = () => {
  const [data, setData] = useState<AccountData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/account')
        if (!response.ok) throw new Error('Failed to fetch account data')
        const json = (await response.json()) as AccountData
        setData(json)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading }
}

export default useAccountData
