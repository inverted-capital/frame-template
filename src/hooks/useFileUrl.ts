import { useEffect, useState } from 'react'
import { useFile } from '@artifact/client/hooks'

/**
 * Returns an object URL for a file stored in the Artifact. If the path is an
 * http(s) or data URL it is returned as-is.
 */
export default function useFileUrl(path?: string): string | undefined {
  const isRemote = !!path && /^(?:https?|data):/.test(path)
  const data = useFile(!path || isRemote ? '' : path)
  const [url, setUrl] = useState<string>()

  useEffect(() => {
    if (!path) {
      setUrl(undefined)
      return
    }
    if (isRemote) {
      setUrl(path)
      return
    }
    if (!data) {
      setUrl(undefined)
      return
    }
    const blob = new Blob([data])
    const obj = URL.createObjectURL(blob)
    setUrl(obj)
    return () => URL.revokeObjectURL(obj)
  }, [path, isRemote, data])

  return url
}
