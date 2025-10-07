import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function Sky() {
  const starsRef = useRef()

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002
      starsRef.current.rotation.x += 0.0002 
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={300}
      // depth={100}
      count={2000}
      // factor={10}
      saturation={1000}
      // fade
    />
  )
}
  