"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DigitalCore() {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.MeshPhysicalMaterial>(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.65, 7), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.18, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px * 0.12, 0.035);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px * 0.22, 0.025);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, py * 0.14, 0.025);
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.65) * 0.018;
    group.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.2}>
      <group ref={group}>
        <mesh geometry={geometry}>
          <meshPhysicalMaterial ref={material} color="#0b4fc8" metalness={0.88} roughness={0.16} clearcoat={1} clearcoatRoughness={0.08} envMapIntensity={1.8} />
        </mesh>
        <mesh scale={1.018} geometry={geometry}>
          <meshBasicMaterial color="#1677ff" wireframe transparent opacity={0.11} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position:[0,0,5.1], fov:38 }}
      gl={{ antialias:true, alpha:true, powerPreference:"high-performance" }}
    >
      <ambientLight intensity={0.18} />
      <directionalLight position={[-4,5,5]} intensity={3.2} color="#dce9ff" />
      <pointLight position={[4,-1,3]} intensity={28} distance={8} color="#1677ff" />
      <pointLight position={[-3,-3,1]} intensity={12} distance={7} color="#0047ff" />
      <DigitalCore />
      <Environment preset="city" />
    </Canvas>
  );
}
