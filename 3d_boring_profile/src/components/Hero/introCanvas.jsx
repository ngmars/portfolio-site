import { MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useMediaQuery } from 'react-responsive'
import { Suspense } from 'react'
import MeComic from './Animation_Fall_from_Bar_withSkin'
import { Instances, Computers } from './computers'
import CanvasLoader from '../canvasLoader'
import useInView from '../../hooks/useInView'

function CameraRig({ cameraZ }) {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, cameraZ],
            0.5,
            delta
        )
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

const IntroCanvas = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const cameraZ = isMobile ? 8.5 : 5.5
    const { ref, inView } = useInView('100px', true)

    return (
        <div ref={ref} className="absolute left-[5vw] top-0 h-[90vh] w-[90vw]">
            <Canvas
                shadows={!isMobile}
                dpr={isMobile ? 1 : [1, 1.25]}
                frameloop={inView ? 'always' : 'never'}
                style={{ touchAction: 'pan-y', pointerEvents: isMobile ? 'none' : 'auto' }}
                gl={{
                    antialias: !isMobile,
                    powerPreference: 'high-performance',
                    stencil: false,
                }}
                camera={{ position: [-1.5, 1, cameraZ], fov: 45, near: 1, far: 20 }}
            >
                <color attach="background" args={['black']} />
                <Suspense fallback={<CanvasLoader />}>
                    <hemisphereLight intensity={0.15} groundColor="black" />
                    <spotLight
                        decay={0}
                        position={[10, 20, 10]}
                        angle={0.12}
                        penumbra={1}
                        intensity={1}
                        castShadow={!isMobile}
                        shadow-mapSize={isMobile ? 512 : 1024}
                    />
                    <group position={[0, -1, 0]}>
                        <Instances>
                            <Computers scale={0.5} lite={isMobile} />
                        </Instances>
                        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[50, 50]} />
                            {isMobile ? (
                                <meshStandardMaterial color="#202020" metalness={0.6} roughness={1} />
                            ) : (
                                <MeshReflectorMaterial
                                    blur={[80, 20]}
                                    resolution={512}
                                    mixBlur={1}
                                    mixStrength={80}
                                    roughness={1}
                                    depthScale={1.2}
                                    minDepthThreshold={0.4}
                                    maxDepthThreshold={1.4}
                                    color="#202020"
                                    metalness={0.8}
                                />
                            )}
                        </mesh>
                        <MeComic
                            scale={[1, 1, 1]}
                            position={[-0.1, -0.1, 1.5]}
                            rotation={[-3.1, 3.1, -3.1]}
                        />
                        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
                        <CameraRig cameraZ={cameraZ} />
                        {!isMobile && <BakeShadows />}
                    </group>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default IntroCanvas
