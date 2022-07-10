import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function Map() {
  const MapInstance = useMemo(() => dynamic(() => import('./components/MapInstance'), { ssr: false }), [])
  return <MapInstance />
}
