import { Canvas } from '@react-three/fiber';

import { Floor } from '../floor';

import styles from './scene.module.scss';

export const SceneBox = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        {children}
      </Canvas>
    </div>
  );
};
