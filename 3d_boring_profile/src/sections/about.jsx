import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'
import SkillsCard from '../components/aboutMe/skills';
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {

    useGSAP(()=> {
        const clipAnimation = gsap.timeline({
            scrollTrigger : {
                trigger : "#clip",
                start: 'center center',
                end : "+=400 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
        .to('.overlay-divs', {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1
            }, "-=0.3")

        
            // grab trigger element
        const triggerEl = document.querySelector("#about-me-image");

        triggerEl.addEventListener("mouseenter", () => {
            clipAnimation.scrollTrigger.enable();
        });

        triggerEl.addEventListener("mouseleave", () => {
            clipAnimation.scrollTrigger.disable();
        });
    })
    return ( 
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-25 flex flex-col items-center gap-5">
                {/* <h2 className="font-general text-white text-sm uppercase md:text-[10px]">
                    About me
                </h2> */}
                <div className="mt-2 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] text-white">
                    Welcome to my dev portfolio
                </div>
                <div className="about-subtext text-white">
                    <p>
                        sometext about how I am a developer... let's pretend that's impressive
                    </p>
                </div>
                <div className='h-dvh w-screen' id='clip'>
                    <div id="about-me-image" className='mask-clip-path about-image relative'>
                        <img 
                            
                            src="img/aboutme2.png"
                            alt="about-me-image"
                            className='absolute left-0 top-0 size-full object-cover'
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overlay-divs opacity-0">
                            <SkillsCard />
                        </div>


                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default AboutSection;