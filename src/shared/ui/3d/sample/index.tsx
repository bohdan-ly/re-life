import { Html, PerspectiveCamera, useGLTF, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { BufferGeometry, Group, Material, Mesh, Vector3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { Loading, Progress } from 'shared/ui/components';

const Particles = ({ index, material }: { index: number; material: JSX.Element }) => {
  function resetPosition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15,
    );

    return v;
  }

  const box = React.useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const [scale] = React.useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [position, setPosition] = React.useState<Vector3>(resetPosition());

  useFrame(({ clock }, delta) => {
    const timer = 0.00001 * Date.now();

    if (!!box.current) {
      const xPos = 120 * Math.cos(timer + index * 20);
      const yPos = 2 * Math.sin(timer * index) - 50;
      const zPos = 300 * Math.sin(timer + index);
      box.current.position.set(xPos, yPos, zPos);
    }
  });

  return (
    <mesh ref={box} scale={scale} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {material}
    </mesh>
  );
};

const RenderObject = () => {
  const [blocks, setBlocks] = React.useState(new Array(130).fill(0));

  const material = <meshBasicMaterial color={'#ff001d'} aoMapIntensity={0.15} />;

  useFrame(() => {});
  return (
    <>
      {blocks.map((x, idx) => (
        <Particles key={idx} index={idx} material={material} />
      ))}
    </>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Object_2: Mesh;
  };
  materials: {
    phong1SG: Material;
  };
};

const CharacterModel = ({ ...props }) => {
  const group = React.useRef<Group>(null);
  const { nodes, materials } = useGLTF('/textures/toukui.glb') as GLTFResult;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.set(0, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
      group.current.position.y = (1 + Math.sin(t / 1.2)) / 5;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.phong1SG} />
      </group>
    </group>
  );
};

// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   return (
//     <Html center className="min-w-[70vw] top-[25vh] text-2xl text-center">
//       {progress} % loaded
//       <Progress percent={progress} strokeColor="#ff00009e" />
//     </Html>
//   );
// }

export const SceneShow = () => {
  const [start, setStart] = React.useState(false);

  return (
    <>
      <Canvas
        shadows
        style={{ position: 'absolute', height: '100%', width: '100%' }}
        onCreated={() => {
          console.log('Canvas loading...');
          setStart(true);
        }}
      >
        <Suspense fallback={null}>
          <RenderObject />
          <CharacterModel position={[-0.5, 7, -5]} rotation={[-0.6, 0, 0]} />
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 20]} />
          <ambientLight args={['#ffff', 1.5]} />
          <pointLight args={['#ffcb009e', 2]} position={[0, 10, 20]} />
        </Suspense>
      </Canvas>

      {!start && (
        <div className="absolute position-centerX bottom-[10vh] w-1/2 flex flex-col items-center">
          <div>
            <Loading />
          </div>
          <span className="mt-4 text-2xl">Loading...</span>
        </div>
      )}
    </>
  );
};
