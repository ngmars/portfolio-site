import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

// Same character as the hero, playing a different clip for the send-off
const DanceFigure = ({ action = 'All_Night_Dance', ...props }) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./models/Meshy_Merged_Animations.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const clip = actions[action]
    clip?.reset().fadeIn(0.6).play()
    return () => clip?.fadeOut(0.3)
  }, [actions, action])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="char1"
            geometry={nodes.char1.geometry}
            material={materials.Material_1}
            skeleton={nodes.char1.skeleton}
            castShadow
          />
        </group>
      </group>
    </group>
  )
}

export default DanceFigure
useGLTF.preload('./models/Meshy_Merged_Animations.glb')
