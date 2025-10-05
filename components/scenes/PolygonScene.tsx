'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function PolygonScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  
  // Create morphing geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 1)
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Morphing animation between different shapes
      const morphFactor = (Math.sin(time * 0.3) + 1) * 0.5
      
      // Rotate the mesh
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
      
      // Scale breathing effect
      const scale = 1 + Math.sin(time * 0.8) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  const disciplineLabels = [
    { text: 'Neuroscience', position: [3, 1, 0], color: '#4f46e5' },
    { text: 'AI', position: [-3, 1, 0], color: '#06b6d4' },
    { text: 'Complexity', position: [0, 3, 0], color: '#8b5cf6' },
    { text: 'Consciousness', position: [0, -3, 0], color: '#f59e0b' }
  ]

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      
      {/* Colored point lights */}
      <pointLight position={[2, 2, 2]} intensity={0.6} color="#4f46e5" />
      <pointLight position={[-2, 2, 2]} intensity={0.6} color="#06b6d4" />
      <pointLight position={[0, -2, 2]} intensity={0.6} color="#8b5cf6" />
      
      {/* Morphing polygon */}
      <group ref={groupRef}>
        <mesh ref={meshRef} geometry={geometry}>
          <meshStandardMaterial 
            color="#4f46e5"
            transparent
            opacity={0.7}
            emissive="#4f46e5"
            emissiveIntensity={0.3}
            wireframe={false}
          />
        </mesh>
        
        {/* Wireframe overlay */}
        <mesh geometry={geometry}>
          <meshBasicMaterial 
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
      
      {/* Discipline labels */}
      {disciplineLabels.map((label, index) => (
        <Text
          key={index}
          position={label.position as [number, number, number]}
          fontSize={0.3}
          color={label.color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.woff"
        >
          {label.text}
        </Text>
      ))}
    </>
  )
}
