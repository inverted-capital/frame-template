import { useExists, useTypedFile } from '@artifact/client/hooks'
import { accountDataSchema, type AccountData } from '../types/account.ts'
import { useEffect, useMemo, useState } from 'react'
import equals from 'fast-deep-equal'

const useAccountData = () => {
  const exists = useExists('profile.json')
  const typedData = useTypedFile('profile.json', accountDataSchema)
  const [data, setData] = useState<AccountData>()

  useEffect(() => {
    if (equals(data, typedData)) return
    if (typedData) {
      setData(typedData)
    }
  }, [typedData, data])

  const loading = useMemo(
    () => exists === null || (exists && typedData === undefined),
    [exists, typedData]
  )
  const error = exists === false ? 'profile.json not found' : null

  return { data, loading, error }
}

export default useAccountData
