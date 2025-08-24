import React from 'react'
import { useGLTF } from '@react-three/drei'

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker_room.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'Sketchfab_model' }}>
          <group
            name="bae1c0dddc9e4393ad68f712ef1cde76fbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'bae1c0dddc9e4393ad68f712ef1cde76.fbx' }}>
            <group name="RootNode" userData={{ name: 'RootNode' }}>
              <group name="computer" userData={{ name: 'computer' }}>
                <mesh
                  name="computer_computer_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.computer_computer_mat_0.geometry}
                  material={materials.computer_mat}
                  userData={{ name: 'computer_computer_mat_0' }}
                />
              </group>
              <group name="server" userData={{ name: 'server' }}>
                <mesh
                  name="server_server_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.server_server_mat_0.geometry}
                  material={materials.server_mat}
                  userData={{ name: 'server_server_mat_0' }}
                />
              </group>
              <group name="vhs" userData={{ name: 'vhs' }}>
                <mesh
                  name="vhs_vhsPlayer_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
                  material={materials.vhsPlayer_mat}
                  userData={{ name: 'vhs_vhsPlayer_mat_0' }}
                />
              </group>
              <group name="shelf" userData={{ name: 'shelf' }}>
                <mesh
                  name="shelf_stand_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.shelf_stand_mat_0.geometry}
                  material={materials.stand_mat}
                  userData={{ name: 'shelf_stand_mat_0' }}
                />
              </group>
              <group name="keyboard_mat" userData={{ name: 'keyboard_mat' }}>
                <mesh
                  name="keyboard_mat_mat_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.keyboard_mat_mat_mat_0.geometry}
                  material={materials.mat_mat}
                  userData={{ name: 'keyboard_mat_mat_mat_0' }}
                />
              </group>
              <group name="arm" userData={{ name: 'arm' }}>
                <mesh
                  name="arm_arm_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.arm_arm_mat_0.geometry}
                  material={materials.arm_mat}
                  userData={{ name: 'arm_arm_mat_0' }}
                />
              </group>
              <group name="Tv" userData={{ name: 'Tv' }}>
                <mesh
                  name="Tv_tv_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tv_tv_mat_0.geometry}
                  material={materials.tv_mat}
                  userData={{ name: 'Tv_tv_mat_0' }}
                />
              </group>
              <group name="table" userData={{ name: 'table' }}>
                <mesh
                  name="table_table_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.table_table_mat_0.geometry}
                  material={materials.table_mat}
                  userData={{ name: 'table_table_mat_0' }}
                />
              </group>
              <group name="Cables" userData={{ name: 'Cables' }}>
                <mesh
                  name="Cables_cables_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cables_cables_mat_0.geometry}
                  material={materials.cables_mat}
                  userData={{ name: 'Cables_cables_mat_0' }}
                />
              </group>
              <group name="props" userData={{ name: 'props' }}>
                <mesh
                  name="props_props_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.props_props_mat_0.geometry}
                  material={materials.props_mat}
                  userData={{ name: 'props_props_mat_0' }}
                />
              </group>
              <group name="screen" userData={{ name: 'screen' }}>
                <mesh
                  name="screen_screens_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.screen_screens_0.geometry}
                  material={materials.screens}
                  userData={{ name: 'screen_screens_0' }}
                />
              </group>
              <group name="screen_glass" userData={{ name: 'screen_glass' }}>
                <mesh
                  name="screen_glass_glass_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.screen_glass_glass_0.geometry}
                  material={materials.glass}
                  userData={{ name: 'screen_glass_glass_0' }}
                />
              </group>
              <group name="Ground" userData={{ name: 'Ground' }}>
                <mesh
                  name="Ground_ground_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Ground_ground_mat_0.geometry}
                  material={materials.ground_mat}
                  userData={{ name: 'Ground_ground_mat_0' }}
                />
              </group>
              <group name="peripherals" userData={{ name: 'peripherals' }}>
                <mesh
                  name="peripherals_key_mat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.peripherals_key_mat_0.geometry}
                  material={materials.key_mat}
                  userData={{ name: 'peripherals_key_mat_0' }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}


export default HackerRoom;
useGLTF.preload('/models/hacker_room.glb')


