'use client'

import React, { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const noiseGLSL = `
vec3 mod289(vec3 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);} 
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
    i.y + vec4(0.0, i1.y, i2.y, 1.0)) +
    i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a1.xy, h.y);
  vec3 p2 = vec3(a1.zw, h.z);
  vec3 p3 = vec3(a0.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}`

function BrainShell({ 
  color = new THREE.Color("#4a55b1"), 
  timeScale = 0.15, 
  noiseAmp = 0.22, 
  shellOpacity = 0.6
}: {
  color?: THREE.Color | string,
  timeScale?: number,
  noiseAmp?: number,
  shellOpacity?: number
}) {
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uAmp: { value: noiseAmp },
    uOpacity: { value: shellOpacity }
  }), [color, noiseAmp, shellOpacity])
  
  useFrame((_, dt) => (uniforms.uTime.value += dt * timeScale))
  
  return (
        <mesh>
          <icosahedronGeometry args={[1.35, 4]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
            vertexShader={`
              uniform float uTime;
              uniform float uAmp;
              varying float vNoise;
              ${noiseGLSL}
              void main(){
                float hemi = sign(position.x);
                float n = snoise(normalize(position) * 1.5 + vec3(0.0, uTime * 0.3, uTime * 0.4));
                float r = 1.0 + uAmp * n + 0.04 * hemi * sin(position.y * 2.0);
                vec3 p = normalize(position) * r;
                vNoise = n;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
              }
            `}
        fragmentShader={`
          uniform vec3 uColor;
          uniform float uOpacity;
          varying float vNoise;
          void main(){
            float glow = smoothstep(0.0, 1.0, vNoise * 0.5 + 0.5);
            vec3 col = mix(vec3(0.0), uColor, 0.6 + glow * 0.4);
            gl_FragColor = vec4(col, uOpacity * (0.7 + glow * 0.3));
          }
        `}
        uniforms={uniforms}
      />
    </mesh>
  )
}


function SparklingParticles({ count = 60, radius = 1.1 }) {
  const ref = useRef<THREE.Points>(null)
  const uniforms = useMemo(() => ({ 
    uTime: { value: 0 }
  }), [])
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const colors = new Float32Array(count * 3)
    
        // Galaxy color palette - more cosmic and diverse
        const colorPalette = [
          [0.9, 0.3, 0.9], // Deep Purple
          [0.2, 0.6, 1.0], // Electric Blue
          [1.0, 0.4, 0.6], // Hot Pink
          [0.3, 0.9, 0.9], // Cyan
          [1.0, 0.7, 0.2], // Golden Orange
          [0.8, 1.0, 0.3], // Lime Green
          [0.6, 0.2, 0.8], // Deep Violet
          [0.1, 0.8, 0.4], // Emerald
          [1.0, 0.2, 0.4], // Crimson
          [0.4, 0.3, 0.9], // Indigo
          [0.9, 0.8, 0.1], // Gold
          [0.7, 0.1, 0.9], // Magenta
        ]
    
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius)
      pos.set([v.x, v.y, v.z], i * 3)
      sizes[i] = Math.random() * 0.3 + 0.05 // Galaxy star sizes between 0.05 and 0.35
      
      // Assign random color from palette
      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const color = colorPalette[colorIndex]
      colors.set(color, i * 3)
    }
    return { positions: pos, sizes: sizes, colors: colors }
  }, [count, radius])

      useFrame(({ clock }) => {
        if (ref.current) {
          ref.current.rotation.y = clock.getElapsedTime() * 0.03
          ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1
          ref.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.008) * 0.05
        }
        uniforms.uTime.value = clock.getElapsedTime()
      })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          array={positions.positions} 
          count={positions.positions.length / 3} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-size" 
          array={positions.sizes} 
          count={positions.sizes.length} 
          itemSize={1} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          array={positions.colors} 
          count={positions.colors.length / 3} 
          itemSize={3} 
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
            vertexShader={`
              attribute float size;
              attribute vec3 color;
              varying float vAlpha;
              varying vec3 vColor;
              varying vec3 vPosition;
              uniform float uTime;
              void main() {
                vPosition = position;
                vColor = color;
                
                vAlpha = 0.4 + 0.6 * sin(uTime * 1.0 + position.y * 4.0 + position.x * 2.0);
                
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (400.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }
            `}
            fragmentShader={`
              varying float vAlpha;
              varying vec3 vColor;
              varying vec3 vPosition;
              uniform float uTime;
              void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
                float alpha = 1.0 - smoothstep(0.0, 0.4, dist);
                alpha *= vAlpha;
                
                vec3 finalColor = vColor;
                gl_FragColor = vec4(finalColor, alpha);
              }
            `}
        uniforms={uniforms}
      />
    </points>
  )
}

function Particles({ count = 120, radius = 1.2 }) {
  const ref = useRef<THREE.Points>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius)
      pos.set([v.x, v.y, v.z], i * 3)
    }
    return pos
  }, [count, radius])
  
      useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        uniforms.uTime.value = t
        
        if (ref.current) {
          ref.current.rotation.y = t * 0.02
          ref.current.rotation.x = Math.sin(t * 0.008) * 0.08
          ref.current.rotation.z = Math.cos(t * 0.006) * 0.03
        }
      })
  
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          array={positions} 
          count={positions.length / 3} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color={"#1e3a8a"} 
        transparent 
        opacity={0.4} 
        depthWrite={false} 
      />
    </points>
  )
}



function BrainScene() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-noetex-black to-noetex-indigo animate-pulse" />}>
        <Canvas 
          camera={{ position: [0, 0, 4], fov: 40 }}
          gl={{ 
            alpha: true, 
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          style={{ background: 'transparent' }}
          onError={(error) => {
            console.error('Canvas error:', error)
          }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[3, 3, 2]} intensity={40} color="#3b82f6" distance={10} decay={2} />
          <pointLight position={[-3, -2, 2]} intensity={26} color="#3b82f6" distance={10} decay={2} />
          <group rotation={[0.1, 0.6, 0]}>
            <BrainShell noiseAmp={0.22} color="#3b82f6" shellOpacity={0.4} />
            <SparklingParticles count={60} />
            <Particles />
          </group>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default function Brain3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <BrainScene />
    </div>
  )
}
