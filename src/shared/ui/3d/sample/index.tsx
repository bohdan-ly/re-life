import { Box, CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React from 'react';
import { Suspense } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

import { angleToRadians, randomRangeNumber } from 'shared/lib/numbers';
import { Loading } from 'shared/ui/components';

const Particles = ({ color, index }: { color: string; index: number }) => {
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
      <meshBasicMaterial color={color} aoMapIntensity={0.15} />
    </mesh>
  );
};

const RenderObject = () => {
  const [blocks, setBlocks] = React.useState(new Array(130).fill(0));

  useFrame(() => {});
  return (
    <>
      {/* <CameraControls ref={cameraRef} /> */}
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />

      {blocks.map((x, idx) => (
        <Particles key={idx} index={idx} color={idx % 2 > 0 ? 'yellow' : 'red'} />
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

export const SceneShow = () => {
  return (
    <Canvas shadows style={{ position: 'absolute', height: '100%', width: '100%' }}>
      <RenderObject />
      <ambientLight args={['#ffff', 1]} />

      {/* <OrbitalScene /> */}
    </Canvas>
  );
};
