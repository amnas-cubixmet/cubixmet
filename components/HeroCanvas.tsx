"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DigitalCore() {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.58, 4), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const px = isTouch ? 0 : state.pointer.x;
    const py = isTouch ? 0 : state.pointer.y;

    group.current.rotation.y += delta * (isTouch ? 0.075 : 0.12);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.16, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px * 0.1, 0.035);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px * 0.18, 0.025);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, py * 0.12, 0.025);
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.65) * 0.014;
    group.current.scale.setScalar(s);
  });

  return (
    <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.16}>
      <group ref={group}>
        <mesh geometry={geometry}>
          <meshPhysicalMaterial
            color="#0b4fc8"
            metalness={0.84}
            roughness={0.2}
            clearcoat={0.9}
            clearcoatRoughness={0.12}
          />
        </mesh>
        <mesh scale={1.018} geometry={geometry}>
          <meshBasicMaterial color="#1677ff" wireframe transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.35]}
      camera={{ position: [0, 0, 5.1], fov: 38 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.8} color="#7ea9ff" />
      <directionalLight position={[-4, 5, 5]} intensity={4.2} color="#dce9ff" />
      <pointLight position={[4, -1, 3]} intensity={34} distance={8} color="#1677ff" />
      <pointLight position={[-3, -3, 1]} intensity={18} distance={7} color="#0047ff" />
      <DigitalCore />
    </Canvas>
  );
}
