import { Box, CameraControls, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React from 'react';
import { Suspense } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

import { angleToRadians, randomRangeNumber } from 'shared/lib/numbers';
import { Loading } from 'shared/ui/components';

const Particles = ({
  color,
  index,
  material,
}: {
  color: string;
  index: number;
  material: JSX.Element;
}) => {
  function resetPosition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15,
    );

    return v;
  }

  const prevTime = React.useRef(0);
  const box = React.useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const [scale] = React.useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [position, setPosition] = React.useState<Vector3>(resetPosition());

  React.useEffect(() => {
    // if (!!box.current) {
    //   const { x, y, z } = resetPosition();
    //   gsap.from(box.current.position, {
    //     stagger: { each: 25, yoyo: true, repeat: -1 },
    //     ease: 'sine.inOut',
    //     x,
    //     y,
    //   });
    // }
  }, []);

  // function render() {
  //   const timer = 0.0001 * Date.now();

  //   jarFireflies.forEach((firefly, index) => {
  //     firefly.moveWings();

  //     const xPos = 50 * Math.cos(timer * index);
  //     const yPos = 80 * Math.sin(timer + index);
  //     const zPos = 60 * Math.sin(timer + index);
  //     firefly.group.position.set(xPos, yPos, zPos);
  //   });

  //   fireflies.forEach((firefly, index) => {
  //     firefly.moveWings();

  //     const xPos = 400 * Math.cos(timer + index);
  //     const yPos = 60 * Math.sin(timer * index) + 150;
  //     const zPos = 100 * Math.sin(timer + index);
  //     firefly.group.position.set(xPos, yPos, zPos);
  //   });

  //   dotSystem.rotation.x += 0.0003;
  //   dotSystem.rotation.y -= 0.0001;

  //   renderer.render(scene, camera);
  // }

  useFrame(({ clock }, delta) => {
    const timer = 0.00001 * Date.now();

    if (!!box.current) {
      // const { x, y, z } = resetPosition();
      const xPos = 120 * Math.cos(timer + index * 20);
      const yPos = 2 * Math.sin(timer * index) - 50;
      const zPos = 300 * Math.sin(timer + index);
      box.current.position.set(xPos, yPos, zPos);
    }

    // const currTime = clock.getElapsedTime();
    // if (currTime - prevTime.current > 1 && box.current) {
    //   box.current.position.addScaledVector(direction, speed * currTime);
    //   if (box.current.position.y < -3) {
    //     box.current.position.y = 3;
    //   }
    //   console.log(box.current.position);

    //   prevTime.current = clock.getElapsedTime();
    //   box.current.rotation.x += 0.02;
    //   box.current.rotation.y += 0.0005;
    //   setPosition(resetPosition());
    // }
  });

  return (
    <mesh ref={box} scale={scale} castShadow position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {material}
    </mesh>
  );
};

const RenderObject = () => {
  const [blocks, setBlocks] = React.useState(new Array(130).fill(0));

  const material = <meshBasicMaterial color={'#ffcb009e'} aoMapIntensity={0.15} />;

  useFrame(() => {});
  return (
    <>
      {/* <CameraControls ref={cameraRef} /> */}
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />

      {blocks.map((x, idx) => (
        <Particles
          key={idx}
          index={idx}
          material={material}
          color={idx % 2 > 0 ? 'yellow' : 'red'}
        />
      ))}
    </>
  );
};

const OrbitalScene = () => {
  const orbitRef = React.useRef(null);

  return (
    <Suspense fallback={<Loading />}>
      <PerspectiveCamera makeDefault position={[0, 2.3, 8]} />
      <OrbitControls ref={orbitRef} autoRotate />
      {/* <RenderObject /> */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={'#04a1dd'} />
      </mesh>
      <mesh rotation={[-angleToRadians(85), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={'#400093'} />
      </mesh>
      <ambientLight args={['#ffff', 1]} />
    </Suspense>
  );
};

const CharacterModel = ({ ...props }) => {
  const group = React.useRef(null);
  const texture = useGLTF('/textures/toukui.glb');
  const { nodes, materials } = useGLTF('/textures/toukui.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.set(0, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
    group.current.position.y = (1 + Math.sin(t / 1.2)) / 5;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.phong1SG} />
      </group>
    </group>
  );
};

export const SceneShow = () => {
  return (
    <Canvas shadows style={{ position: 'absolute', height: '100%', width: '100%' }}>
      <RenderObject />
      <CharacterModel position={[-0.5, 7, -5]} rotation={[-0.6, 0, 0]} />
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 20]} />
      {/* <OrbitControls autoRotate /> */}

      <ambientLight args={['#ffff', 1.5]} />
      <pointLight args={['#ffcb009e', 2]} position={[0, 10, 20]} />
      {/* <axesHelper args={[5]} /> */}
      {/* <OrbitalScene /> */}
    </Canvas>
  );
};
