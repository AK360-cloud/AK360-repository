"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { TextureLoader } from "three";
import type { Mesh } from "three";

function Earth() {
  const meshRef = useRef<Mesh>(null);

  const [earthMap, earthBump, earthSpec] = useLoader(TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg",
  ]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBump}
          bumpScale={0.05}
          specularMap={earthSpec}
          specular="#333333"
          shininess={5}
        />
      </Sphere>

      <Sphere args={[1.25, 64, 64]}>
        <meshBasicMaterial color="#4da6ff" transparent opacity={0.08} />
      </Sphere>

      <Sphere args={[1.32, 64, 64]}>
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.04} />
      </Sphere>

      <LocationMarker position={[1.04, 0.56, 0.36]} />
      <LocationMarker position={[-0.16, 0.84, 0.84]} />
      <LocationMarker position={[0.48, -0.8, 0.84]} />
      <LocationMarker position={[0.72, 0.12, 0.96]} />
      <LocationMarker position={[-0.88, -0.48, 0.72]} />
      <LocationMarker position={[0.96, -0.6, 0.48]} />
    </group>
  );
}

function LocationMarker({
  position,
}: {
  position: [number, number, number];
}) {
  const markerRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (markerRef.current) {
      const scale =
        1 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.4;
      markerRef.current.scale.setScalar(scale);
    }

    if (ringRef.current) {
      const ringScale =
        1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.5;

      ringRef.current.scale.setScalar(ringScale);

      const material = ringRef.current.material as any;

      const opacity =
        0.5 - Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;

      if (Array.isArray(material)) {
        material.forEach((m: any) => {
          m.opacity = opacity;
        });
      } else {
        material.opacity = opacity;
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={markerRef}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.08, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />
      <directionalLight position={[-5, -3, -5]} intensity={0.2} />
      <pointLight position={[-10, 5, -10]} intensity={0.3} />

      <Earth />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial color="#1a3a5c" wireframe />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full aspect-square">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}