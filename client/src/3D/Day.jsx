// DaySky.jsx
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Sky } from 'three/addons/objects/Sky.js'

export default function DaySky() {
  const { scene } = useThree()
  const skyRef = useRef()
  const sun = useRef(new THREE.Vector3())

  useEffect(() => {
    // Create the sky
    const sky = new Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)
    skyRef.current = sky

    // Set sky shader parameters
    const uniforms = sky.material.uniforms
    uniforms['turbidity'].value = 10      // how hazy the sky is
    uniforms['rayleigh'].value = 2        // blue color intensity
    uniforms['mieCoefficient'].value = 0.005
    uniforms['mieDirectionalG'].value = 0.8

    // ☀️ Set sun position (azimuth = direction, elevation = height)
    const phi = THREE.MathUtils.degToRad(90 - 10) // elevation
    const theta = THREE.MathUtils.degToRad(180)   // azimuth
    sun.current.setFromSphericalCoords(1, phi, theta)
    uniforms['sunPosition'].value.copy(sun.current)

    // Optional: ambient light + directional light
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2)
    sunLight.position.copy(sun.current)
    scene.add(sunLight)

    return () => {
      scene.remove(sky)
      scene.remove(sunLight)
    }
  }, [scene])

  return null
}
