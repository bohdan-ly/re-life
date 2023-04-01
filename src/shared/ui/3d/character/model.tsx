import { useGLTF } from '@react-three/drei';

export const Model = ({ props }) => {
  const { nodes, materials } = useGLTF('/textures/hero-model/warrior.glb');

  return (
    <group {...props} scale={2} position-y={0} rotation={[-1.5, 0, 0]} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.MIC_MaleTank} />
      {/* <mesh geometry={nodes.Object_3.geometry} material={materials.MIC_MaleTank_Armor} /> */}
      {/* <mesh geometry={nodes.Sketchfab_Scene.geometry} material={materials.MIC_MaleTank} /> */}
      <mesh geometry={nodes.Sketchfab_model.geometry} material={materials.MIC_MaleTank_Armor} />
    </group>
  );
};

useGLTF.preload('/textures/helmet/toukui.glb');
