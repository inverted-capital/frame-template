import { useExists, useTypedFile } from '@artifact/client/hooks'
import { accountDataSchema } from '../types/account'
import { useMemo } from 'react'

const useAccountData = () => {
  const exists = useExists('profile.json')
  const data = useTypedFile('profile.json', accountDataSchema)

  const loading = useMemo(
    () => exists === null || (exists && data === undefined),
    [exists, data]
  )
  const error = exists === false ? 'profile.json not found' : null

  return { data, loading, error }
}

export default useAccountData
