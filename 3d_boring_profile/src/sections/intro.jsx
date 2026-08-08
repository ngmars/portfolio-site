import {MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import MeComic from "../components/Hero/Animation_Fall_from_Bar_withSkin"
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { Instances, Computers } from '../components/Hero/computers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
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
        
    // Pull the camera back on small screens so the whole scene fits portrait viewports
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const cameraZ = isMobile ? 8.5 : 5.5

    const CameraRig = () => {
        useFrame((state, delta) => {
            easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, cameraZ], 0.5, delta)
            state.camera.lookAt(0, 0, 0)
        })
        }

    return (
        <div className='min-h-screen w-full' > 
            {/* <div className="w-full h-full my-10 mx-0  flex flex-col">
                <p className="hero_tag font-medium !z-[100] text-white text-center">
                    Hi, I am Nitish Gopinath
                </p>
            </div> */}
            <div className="w-[90vw] h-[90vh] absolute top-[0vw] left-[5vw]">
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
            {/* Swipe hint — the camera follows the pointer left/right (mouse only, hidden on touch) */}
            <div className="pointer-events-none absolute bottom-20 right-8 z-[100] hidden flex-col items-center gap-2 md:flex">
                <div className="flex items-center gap-2 text-[#35c19f]/70">
                    <FontAwesomeIcon icon={['fas', 'chevron-left']} className="text-xs" />
                    <div className="flex h-9 w-28 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                        <span className="animate-swipe-x h-4 w-4 rounded-full bg-[#35c19f] shadow-[0_0_14px_rgba(53,193,159,0.8)]" />
                    </div>
                    <FontAwesomeIcon icon={['fas', 'chevron-right']} className="text-xs" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                    Move mouse to look around
                </p>
            </div>

            {/* Bouncing scroll-down arrow */}
            <a
                href="#about"
                className="scroll-down-arrow group animate-bounce"
            >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#35c19f]/40 bg-[#35c19f]/15 text-[#35c19f] shadow-[0_0_20px_rgba(53,193,159,0.3)] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#35c19f]/30 group-hover:shadow-[0_0_30px_rgba(53,193,159,0.5)]">
                    <FontAwesomeIcon icon={['fas', 'chevron-down']} className="text-lg" />
                </span>
            </a>
        </div>
     );
}
 
export default IntroSection;