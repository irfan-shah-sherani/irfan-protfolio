// Water.jsx
import { useRef, useEffect } from 'react'
import { extend, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Water } from 'three/examples/jsm/objects/Water.js'

// 👇 Make Water usable as a JSX element
extend({ Water })

export default function WaterPlane() {
  const ref = useRef()
  const { scene } = useThree()

  useEffect(() => {
    const waterGeometry = new THREE.PlaneGeometry( 100, 30 )
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        'https://threejs.org/examples/textures/waternormals.jpg',
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
      format: THREE.RGBAFormat,
    })

    water.rotation.x = -Math.PI / 2
    ref.current = water
    scene.add(water)

    return () => scene.remove(water)
  }, [scene])

  return null
}
