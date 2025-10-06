// TextWithReflectionOptimized.jsx
import { Text3D, Center, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useMemo } from 'react'

export default function TextWithReflection() {
  // ⚙️ Simpler but still shiny material
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#00ffff',
        metalness: 0.7,
        roughness: 0.2,
        emissive: '#0099aa', // subtle glow color
        emissiveIntensity: 0.3,
      }),
    []
  )

  return (
    <>
      <Center position={[0, 3, -10]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={4}
          height={0.4}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelSegments={10}
          curveSegments={12}
          material={material}
        >
          Irfan Khan
        </Text3D>
      </Center>

      {/* ✨ Realistic lighting */}
      <Environment preset="sunset" />

      {/* ⚡ Lighter bloom settings */}
      <EffectComposer multisampling={0}> 
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.7}
          mipmapBlur
        />
      </EffectComposer>
    </>
  )
}
