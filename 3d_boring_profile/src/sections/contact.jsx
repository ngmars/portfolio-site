import { useRef, Suspense, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Canvas } from '@react-three/fiber';
import DanceFigure from '../components/contact/danceFigure';
import CanvasLoader from '../components/canvasLoader';
import useInView from '../hooks/useInView';
import { LINKS } from '../constants/links';
import { REVEAL, ANY_MOTION } from '../constants/motion';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { ref: canvasWrapRef, inView } = useInView('250px', false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) setMounted(true);
  }, [inView]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.from('.contact-reveal', {
          ...REVEAL,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        });
      });

      // Sections lazy-load in any order; re-measure so earlier pins don't leave stale trigger positions
      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section id="contact" ref={sectionRef} className="relative w-full py-32">
        <div className="mx-auto grid max-w-[980px] items-center gap-12 px-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="text-center md:text-left">
            <p className="contact-reveal eyebrow">Contact</p>
            <h2 className="contact-reveal headline-xl mt-2 text-white">
              Let&apos;s build something.
            </h2>
            <p className="contact-reveal body-lg mt-5 max-w-lg md:max-w-none">
              Open to interesting problems, collaborations and new roles.
            </p>
            <div className="contact-reveal mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 md:justify-start">
              <a href={LINKS.email} className="btn-primary">Email me</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="link-more">LinkedIn</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="link-more">GitHub</a>
            </div>
          </div>

          {/* 3D send-off — same character as the hero, busting a move */}
          <div ref={canvasWrapRef} className="contact-reveal mx-auto h-56 w-full max-w-md md:h-64">
            {mounted && (
              <Canvas
                className="h-full w-full"
                dpr={1}
                frameloop={inView ? 'always' : 'never'}
                gl={{ antialias: false, powerPreference: 'high-performance', stencil: false }}
              >
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[8, 12, 8]} intensity={1.4} />
                  <DanceFigure
                    scale={[1.5, 1.5, 1.5]}
                    position={[-1.5, -1.1, 2.7]}
                    rotation={[0, 0, 0]}
                  />
                </Suspense>
              </Canvas>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-surface-light text-ink-muted">
        <div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-3 border-t border-black/10 px-4 py-5 text-[12px] sm:flex-row">
          <p>© {new Date().getFullYear()} Nitish Gopinath</p>
          <div className="flex gap-6">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">GitHub</a>
            <a href={LINKS.email} className="hover:text-ink hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
