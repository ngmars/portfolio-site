import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/hackerRoom";
import MeComic from "../components/Hero/Animation_Fall_from_Bar_withSkin"
import CanvasLoader from "../components/canvasLoader";
import { Suspense } from 'react';
import {Leva, useControls} from 'leva';
const Hero = () => {
    const controls = useControls('StitchFigure', 
        {
            positionX: {
                value:2.5,
                min: -10,
                max: 10
            },
            positionY: {
                value:2.5,
                min: -10,
                max: 10
            },
            positionZ: {
                value:2.5,
                min: -10,
                max: 10
            },
            rotationX: {
                value:2.5,
                min: -10,
                max: 10
            },
            rotationY: {
                value:2.5,
                min: -10,
                max: 10
            },
            rotationZ: {
                value:2.5,
                  min: -10,                max: 10
            },
            scale: {
                value:1,
                min: 0,
                max: 1
            },
        }
    )

    return (
        <section className="min-h-screen w-full flex-col relative">
            <div className="w-full h-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
                <p className="hero_tag font-medium text-white text-center font-generalsans">
                    Hi, I am Nitish Gopinath
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
               <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <perspectiveCamera makeDefault position={[0,0,30]}/>
                            <MeComic 
                                scale={[0.9,0.9,0.9]} 
                                position={[-0.1, -0.5, 2.7]} 
                                rotation={[-2.7, 3.1, -3.15]} 
                            />
                        {/* Spotlight with shadows */}
                        <spotLight
                        position={[10, 20, 10]}
                        angle={0.3}
                        penumbra={0.5}
                        intensity={3}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        />

                        {/* A ground plane to catch shadows */}
                        <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -1, 0]}
                        receiveShadow
                        >
                        <planeGeometry args={[50, 50]} />
                        <shadowMaterial opacity={0.3} /> {/* transparent shadow */}
                        </mesh>
                    </Suspense>
                </Canvas> 
            </div>  
        </section>
    );
}
 
export default Hero;