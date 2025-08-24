
import React from 'react'
import { useGLTF } from '@react-three/drei'

const StitchFigure = (props) => {
  const { nodes, materials } = useGLTF('models/lilo_and_stitchs_shenanigans.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'Sketchfab_model' }}>
          <group name="root" userData={{ name: 'root' }}>
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: 'GLTF_SceneRootNode' }}>
              <group
                name="Stitch_0"
                position={[3.123, 2.105, 1.882]}
                userData={{ name: 'Stitch_0' }}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.M_Stitch}
                  userData={{ name: 'Object_4' }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default StitchFigure;
useGLTF.preload('models/lilo_and_stitchs_shenanigans.glb')
