import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function Sky() {
  const starsRef = useRef()

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002
      starsRef.current.rotation.x += 0.0004
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={200}
      depth={50}
      count={4000}
      factor={10}
      saturation={0.8}
      fade
    />
  )
}
  