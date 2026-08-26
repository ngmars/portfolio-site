import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'
import SkillsCard from '../components/aboutMe/skills';
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {

    useGSAP(()=> {
        const mm = gsap.matchMedia();

        // Desktop only — the pinned clip-expansion animation
        mm.add('(min-width: 768px)', () => {
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

            clipAnimation
            .fromTo('.blur-overlay', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0)
            .to('.mask-clip-path', {
                width: '100vw',
                height: '100vh',
                borderRadius: 0
            }, 0)
            .to('.overlay-divs', {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1
                }, "-=0.3")

            return () => {
                clipAnimation.scrollTrigger?.kill();
                clipAnimation.kill();
            };
        });

        // Mobile — simple reveals for the image and skills card in normal flow
        mm.add('(max-width: 767px)', () => {
            gsap.utils.toArray('.m-about-reveal').forEach((el) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    y: 40,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });
        });
    })
    return ( 
        <div id="about" className="min-h-screen w-screen">
            <div className="relative isolate mb-8 mt-25 flex flex-col items-center gap-5">
                {/* <h2 className="font-general text-white text-sm uppercase md:text-[10px]">
                    About me
                </h2> */}
                <div className="relative z-30 mt-2 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] text-white">
                    Welcome to my dev portfolio
                </div>
                <div className="relative z-30 about-subtext text-white">
                    <p>
                        sometext about how I am a developer... let's pretend that's impressive
                    </p>
                </div>
                {/* Desktop: pinned clip-expansion into the skills overlay */}
                <div className='relative z-0 hidden h-dvh w-screen md:block' id='clip'>
                    <div id="about-me-image" className='mask-clip-path about-image relative'>
                        <img

                            src="img/aboutme2.jpg"
                            alt="about-me-image"
                            className='absolute left-0 top-0 size-full object-cover'
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="blur-overlay pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0" />
                        <div className="overlay-divs absolute inset-0 flex flex-col items-center justify-center gap-4 pb-[clamp(0.75rem,3vh,2rem)] pt-[clamp(4.75rem,11vh,6rem)] opacity-0">
                            <SkillsCard />
                        </div>


                    </div>
                </div>

                {/* Mobile: image and skills card in normal flow */}
                <div className="flex w-full flex-col items-center gap-8 px-4 pb-16 pt-4 md:hidden">
                    <div className="m-about-reveal w-full overflow-hidden rounded-3xl border border-white/15 shadow-xl">
                        <img
                            src="img/aboutme2.jpg"
                            alt="about-me-image"
                            className="h-[45vh] w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="m-about-reveal w-full">
                        <SkillsCard />
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default AboutSection;