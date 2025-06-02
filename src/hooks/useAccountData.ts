import { useExists, useJson } from '@artifact/client/hooks'
import { accountDataSchema } from '../types/account'
import type { AccountData } from '../types/account'
import { useMemo } from 'react'

const useAccountData = () => {
  const exists = useExists('profile.json')
  const raw = useJson('profile.json') as unknown
  const data = raw ? (accountDataSchema.parse(raw) as AccountData) : undefined

  const loading = useMemo(
    () => exists === null || (exists && data === undefined),
    [exists, data]
  )
  const error = exists === false ? 'profile.json not found' : null

  return { data, loading, error }
}

export default useAccountData
