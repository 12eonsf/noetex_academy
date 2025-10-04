'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
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
  shellOpacity = 0.28 
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
      <icosahedronGeometry args={[1.35, 6]} />
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
            float n = snoise(normalize(position) * 2.0 + vec3(0.0, uTime * 0.4, uTime * 0.6));
            float r = 1.0 + uAmp * n + 0.06 * hemi * sin(position.y * 3.0);
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

function PulseTube({ curve, speed = 0.12, width = 0.008, color = "#7c3aed" }: {
  curve: THREE.Curve<THREE.Vector3>
  speed?: number
  width?: number
  color?: string
}) {
  const uniforms = useMemo(() => ({ 
    uTime: { value: 0 }, 
    uColor: { value: new THREE.Color(color) } 
  }), [color])
  
  useFrame((_, dt) => (uniforms.uTime.value += dt * speed))
  
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 120, width, 8, false), [curve, width])
  
  return (
    <mesh geometry={geo}>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={`
          varying float vU;
          void main(){
            vU = uv.x;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor;
          varying float vU;
          void main(){
            float head = fract(uTime);
            float d = abs(vU - head);
            float trail = smoothstep(0.25, 0.0, d);
            vec3 col = mix(vec3(0.0), uColor, 0.6 + trail * 0.6);
            gl_FragColor = vec4(col, trail);
          }
        `}
      />
    </mesh>
  )
}

function NeuralNetwork({ numCurves = 14, radius = 0.95 }) {
  const curves = useMemo(() => {
    const randPoint = () => new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius)
    return Array.from({ length: numCurves }, () => 
      new THREE.CatmullRomCurve3(Array.from({ length: 4 }, randPoint))
    )
  }, [numCurves, radius])
  
  return (
    <group>
      {curves.map((c, i) => (
        <PulseTube 
          key={i} 
          curve={c} 
          speed={0.09 + (i % 5) * 0.02} 
          width={0.01} 
        />
      ))}
    </group>
  )
}

function Particles({ count = 400, radius = 1.2 }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius)
      pos.set([v.x, v.y, v.z], i * 3)
    }
    return pos
  }, [count, radius])
  
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.05
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
        size={0.01} 
        color={"#8b5cf6"} 
        transparent 
        opacity={0.35} 
        depthWrite={false} 
      />
    </points>
  )
}

function BrainScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
      <color attach="background" args={["#0c0c0e"]} />
      <fog attach="fog" args={["#0c0c0e", 6, 12]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 2]} intensity={40} color="#4a55b1" distance={10} decay={2} />
      <pointLight position={[-3, -2, 2]} intensity={26} color="#7c3aed" distance={10} decay={2} />
      <group rotation={[0.1, 0.6, 0]}>
        <BrainShell noiseAmp={0.22} />
        <NeuralNetwork numCurves={16} />
        <Particles />
      </group>
      <OrbitControls enablePan={false} minDistance={3} maxDistance={6} />
      <Environment preset="night" />
    </Canvas>
  )
}

export default function Brain3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <BrainScene />
    </div>
  )
}
