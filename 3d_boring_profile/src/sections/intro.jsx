import {MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import MeComic from "../components/Hero/Animation_Fall_from_Bar_withSkin"
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { Instances, Computers } from '../components/Hero/computers'
// import {Leva, useControls} from 'leva';
const IntroSection = () => {

    // const controls = useControls('StitchFigure', 
    //         {
    //             positionX: {
    //                 value:-0.1, //-0.1, -0.5, 2.7
    //                 min: -10,
    //                 max: 10
    //             },
    //             positionY: {
    //                 value:-0.5,
    //                 min: -10,
    //                 max: 10
    //             },
    //             positionZ: {
    //                 value:2.7,
    //                 min: -10,
    //                 max: 10
    //             },
    //             rotationX: {
    //                 value:-2.7,
    //                 min: -10, //-2.7, 3.1, -3.15
    //                 max: 10
    //             },
    //             rotationY: {
    //                 value: 3.1,
    //                 min: -10,
    //                 max: 10
    //             },
    //             rotationZ: {
    //                 value:-3.15,
    //                   min: -10,                
    //                   max: 10
    //             },
    //             scale: {
    //                 value:1,
    //                 min: 0,
    //                 max: 1
    //             },
    //         }
    //     )
        
    const CameraRig = () => {
        useFrame((state, delta) => {
            easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
            state.camera.lookAt(0, 0, 0)
        })
        }

    return (
        <div className='min-h-screen w-full flex-col relative' > 
            <div className="w-full h-full my-10 mx-0  flex flex-col">
                <p className="hero_tag font-medium !z-[100] text-[#8f8f8f] text-center">
                    Hi, I am Nitish Gopinath
                </p>
            </div>
            <div className="w-[80vw] h-[90vh] absolute top-[0vw] left-[10vw]">
                <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
                    {/* Lights */}
                    
                    <color attach="background" args={['black']} />
                    <hemisphereLight intensity={0.15} groundColor="black" />
                    <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                    {/* Main scene */}
                    <group position={[-0, -1, 0]}>
                        {/* Auto-instanced sketchfab model */}
                        <Instances>
                        <Computers scale={0.5} />
                        </Instances>
                        {/* Plane reflections + distance blur */}
                        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 30]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={180}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#202020"
                            metalness={0.8}
                        />
                        </mesh>
                        <MeComic 
                            scale={[1 , 1, 1]} 
                            position={[-0.1,-0.1,1.5]} 
                            rotation={[-3.1, 3.1, -3.1]} 
                        />
                        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />

                        {/* Camera movements */}
                        <CameraRig />
                        {/* Small helper that freezes the shadows for better performance */}
                </group>
                </Canvas>
            </div>
        </div>
     );
}
 
export default IntroSection;