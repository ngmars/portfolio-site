import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Box3, Vector3 } from 'three'

// Joint positions miss the body's thickness around them; pad the sides by
// this fraction of the figure's height to cover arms, hips and shoes.
const SIDE_PAD = 0.12
const SAMPLES = 120

// Space the whole clip covers, in the coordinates of this figure's parent.
// Samples the skeleton's joints across the clip (cheap — a few dozen bones),
// plus one precise mesh box at the first frame for full head-to-toe height.
const measureClip = (root, action) => {
  const mixer = action.getMixer()
  const clip = action.getClip()
  const box = new Box3()
  const point = new Vector3()

  action.reset().play()
  for (let i = 0; i <= SAMPLES; i++) {
    mixer.setTime((clip.duration * i) / SAMPLES)
    root.updateMatrixWorld(true)
    root.traverse((o) => {
      if (o.isBone) box.expandByPoint(o.getWorldPosition(point))
    })
  }
  mixer.setTime(0)
  root.updateMatrixWorld(true)
  box.union(new Box3().setFromObject(root, true))

  const pad = (box.max.y - box.min.y) * SIDE_PAD
  box.min.x -= pad
  box.max.x += pad
  box.min.z -= pad
  box.max.z += pad

  const parentOrigin = root.parent ? root.parent.getWorldPosition(new Vector3()) : new Vector3()
  return box.translate(parentOrigin.negate())
}

// Same character as the hero, playing a different clip for the send-off.
// `onBounds` receives the space the whole dance covers, so the camera can
// frame all of it rather than just the opening pose.
const DanceFigure = ({ action = 'All_Night_Dance', onBounds, ...props }) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./models/Meshy_Merged_Animations.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const clip = actions[action]
    if (!clip) return
    if (onBounds && group.current) onBounds(measureClip(group.current, clip))
    clip.reset().fadeIn(0.6).play()
    return () => clip.fadeOut(0.3)
  }, [actions, action, onBounds])

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
