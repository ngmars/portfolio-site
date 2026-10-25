import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'
import SkillsCard from '../components/aboutMe/skills';
import { REVEAL, DESKTOP_MOTION, MOBILE_MOTION } from '../constants/motion';
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {

    useGSAP(()=> {
        const mm = gsap.matchMedia();

        // Desktop only — the pinned clip-expansion animation (the page's one pinned moment)
        mm.add(DESKTOP_MOTION, () => {
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
            .fromTo('.overlay-divs', { opacity: 0, y: 24 }, {
                opacity: 1,
                y: 0,
                duration: 1
                }, "-=0.3")

            return () => {
                clipAnimation.scrollTrigger?.kill();
                clipAnimation.kill();
            };
        });

        // Mobile — simple reveals for the image and skills card in normal flow
        mm.add(MOBILE_MOTION, () => {
            gsap.utils.toArray('.m-about-reveal').forEach((el) => {
                gsap.from(el, {
                    ...REVEAL,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });
        });

        // Sections lazy-load in any order; re-measure once this pin exists
        requestAnimationFrame(() => ScrollTrigger.refresh());
    })
    return (
        <section id="about" className="min-h-screen w-screen">
            <div className="relative isolate mb-8 mt-32 flex flex-col items-center gap-5">
                <div className="relative z-30 flex max-w-[980px] flex-col items-center px-4 text-center">
                    <p className="eyebrow">About</p>
                    <h2 className="headline-lg mt-2 text-white">
                        Messy data in. Useful tools out.
                    </h2>
                    <p className="body-lg mt-5 max-w-2xl">
                        I&apos;m a data scientist at DNV in Hamburg, building analytics and ML
                        tooling for wind energy, with a background in backend and full-stack
                        engineering.
                    </p>
                </div>
                {/* Desktop: pinned clip-expansion into the skills overlay.
                    With reduced motion the overlay is shown in place without expanding. */}
                <div className='relative z-0 mt-10 hidden h-dvh w-screen md:block' id='clip'>
                    <div id="about-me-image" className='mask-clip-path about-image relative motion-reduce:h-[100vh] motion-reduce:w-screen motion-reduce:rounded-none'>
                        <img
                            src="img/aboutme2.jpg"
                            alt="Illustration of Nitish working at a desk"
                            className='absolute left-0 top-0 size-full object-cover'
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="blur-overlay pointer-events-none absolute inset-0 bg-black/40 opacity-0 backdrop-blur-md motion-reduce:opacity-100" />
                        <div className="overlay-divs absolute inset-0 flex flex-col items-center justify-center gap-4 pb-[clamp(0.75rem,3vh,2rem)] pt-[clamp(4.75rem,11vh,6rem)] opacity-0 motion-reduce:opacity-100">
                            <SkillsCard />
                        </div>
                    </div>
                </div>

                {/* Mobile: image and skills card in normal flow */}
                <div className="flex w-full flex-col items-center gap-6 px-4 pb-16 pt-8 md:hidden">
                    <div className="m-about-reveal w-full overflow-hidden rounded-[28px]">
                        <img
                            src="img/aboutme2.jpg"
                            alt="Illustration of Nitish working at a desk"
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
        </section>
    );
}

export default AboutSection;
