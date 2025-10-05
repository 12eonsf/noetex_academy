'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function CognitiveScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const pointsRef = useRef<THREE.Points>(null)
  
  // Create neural network-like structure
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(1000)
    const colors = new Float32Array(1000)
    
    for (let i = 0; i < 1000; i++) {
      // Create a grid-like structure with some randomness
      const x = (Math.random() - 0.5) * 8
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 8
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      // Neural network colors - blue to cyan gradient
      const intensity = Math.random() * 0.5 + 0.5
      colors[i * 3] = 0.2 * intensity // R
      colors[i * 3 + 1] = 0.6 * intensity // G
      colors[i * 3 + 2] = 1.0 * intensity // B
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Breathing animation
      const time = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(time * 0.5) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
    
    if (pointsRef.current) {
      // Gentle rotation
      pointsRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Point lights for neural glow */}
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#4f46e5" />
      <pointLight position={[-2, -2, 2]} intensity={0.3} color="#06b6d4" />
      <pointLight position={[0, 0, -2]} intensity={0.4} color="#8b5cf6" />
      
      {/* Neural network structure */}
      <group ref={meshRef}>
        {/* Main neural building - transparent cubes */}
        {Array.from({ length: 5 }, (_, i) => (
          <mesh key={i} position={[i * 0.5 - 1, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial 
              color="#4f46e5" 
              transparent 
              opacity={0.3}
              emissive="#4f46e5"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
        
        {/* Neural connections */}
        <Points ref={pointsRef} positions={positions} colors={colors}>
          <PointMaterial
            transparent
            color="#4f46e5"
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  )
}
