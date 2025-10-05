'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function OrbitScene() {
  const groupRef = useRef<THREE.Group>(null)
  const trail1Ref = useRef<THREE.Points>(null)
  const trail2Ref = useRef<THREE.Points>(null)
  
  // Create particle trails
  const { positions1, positions2, colors1, colors2 } = useMemo(() => {
    const count = 200
    const positions1 = new Float32Array(count * 3)
    const positions2 = new Float32Array(count * 3)
    const colors1 = new Float32Array(count * 3)
    const colors2 = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 2 + Math.sin(angle * 3) * 0.5
      
      // First orbit (blue)
      positions1[i * 3] = Math.cos(angle) * radius
      positions1[i * 3 + 1] = Math.sin(angle) * radius * 0.3
      positions1[i * 3 + 2] = Math.sin(angle) * radius * 0.5
      
      // Second orbit (gold)
      positions2[i * 3] = Math.cos(angle + Math.PI) * radius
      positions2[i * 3 + 1] = Math.sin(angle + Math.PI) * radius * 0.3
      positions2[i * 3 + 2] = Math.sin(angle + Math.PI) * radius * 0.5
      
      // Colors
      colors1[i * 3] = 0.2 // R
      colors1[i * 3 + 1] = 0.6 // G
      colors1[i * 3 + 2] = 1.0 // B
      
      colors2[i * 3] = 1.0 // R
      colors2[i * 3 + 1] = 0.8 // G
      colors2[i * 3 + 2] = 0.2 // B
    }
    
    return { positions1, positions2, colors1, colors2 }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Continuous rotation
      groupRef.current.rotation.y = time * 0.2
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
      
      // Pulsing scale for merge effect
      const pulse = 1 + Math.sin(time * 2) * 0.1
      groupRef.current.scale.setScalar(pulse)
    }
    
    if (trail1Ref.current) {
      trail1Ref.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
    
    if (trail2Ref.current) {
      trail2Ref.current.rotation.y = -state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Central light source */}
      <pointLight position={[0, 0, 0]} intensity={1.0} color="#ffffff" />
      
      {/* Orbital lights */}
      <pointLight position={[3, 0, 0]} intensity={0.5} color="#4f46e5" />
      <pointLight position={[-3, 0, 0]} intensity={0.5} color="#f59e0b" />
      
      <group ref={groupRef}>
        {/* First particle trail (blue) */}
        <Points ref={trail1Ref} positions={positions1} colors={colors1}>
          <PointMaterial
            transparent
            color="#4f46e5"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
        
        {/* Second particle trail (gold) */}
        <Points ref={trail2Ref} positions={positions2} colors={colors2}>
          <PointMaterial
            transparent
            color="#f59e0b"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
        
        {/* Central merge point */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Spiral connection lines */}
        {Array.from({ length: 20 }, (_, i) => {
          const angle = (i / 20) * Math.PI * 4
          const radius = 1 + i * 0.1
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius * 0.3
          const z = Math.sin(angle) * radius * 0.5
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshBasicMaterial 
                color="#06b6d4"
                transparent
                opacity={0.6}
              />
            </mesh>
          )
        })}
      </group>
    </>
  )
}
