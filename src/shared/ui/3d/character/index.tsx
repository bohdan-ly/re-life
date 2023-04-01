import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

import { Model } from './model';

export const Character = () => {
  return (
    <Canvas
      style={{ position: 'absolute', height: '100%', width: '100%' }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <React.Suspense fallback={null}>
        <Model />
      </React.Suspense>
    </Canvas>
  );
};

// useGLTF.preload('/textures/helmet/toukui.glb');
