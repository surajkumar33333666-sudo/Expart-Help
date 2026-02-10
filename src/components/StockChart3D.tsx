import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

function StockLine() {
  const lineRef = useRef<any>(null);
  
  // Create a stock-like line with peaks and valleys
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 50; i++) {
      const x = (i - 25) * 0.2;
      const y = Math.sin(i * 0.3) * 0.5 + Math.sin(i * 0.1) * 0.3;
      const z = 0;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      lineRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#10b981"
      lineWidth={3}
      dashed={false}
    />
  );
}

function FloatingCoins() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 1, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
      <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function RisingBars() {
  const barsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (barsRef.current) {
      barsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const bars = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const height = 0.5 + Math.sin(i * 0.8) * 0.3;
    bars.push(
      <mesh key={i} position={[Math.cos(angle) * 2, height / 2, Math.sin(angle) * 2]}>
        <boxGeometry args={[0.2, height, 0.2]} />
        <meshStandardMaterial 
          color={height > 0.7 ? '#10b981' : '#ef4444'} 
          metalness={0.7} 
          roughness={0.3} 
        />
      </mesh>
    );
  }

  return <group ref={barsRef}>{bars}</group>;
}

export default function StockChart3D() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <StockLine />
        <FloatingCoins />
        <RisingBars />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}