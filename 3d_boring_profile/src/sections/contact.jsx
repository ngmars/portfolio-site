import { useRef, Suspense, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import DanceFigure from '../components/contact/danceFigure';
import CanvasLoader from '../components/canvasLoader';
import useInView from '../hooks/useInView';
import { LINKS } from '../constants/links';
import { REVEAL, ANY_MOTION } from '../constants/motion';

gsap.registerPlugin(ScrollTrigger);

// Centres `bounds` (a Box3 in this group's space — here, the space the whole
// dance covers) and pulls the camera back until it fills the canvas with
// `margin` headroom. Any spare width goes to the right, so the figure sits
// against the canvas's left edge, next to the text. Re-fits on resize.
const FitToView = ({ bounds, children, margin = 1.08 }) => {
  const ref = useRef(null);
  const fitted = useRef(false);
  const { camera, size } = useThree();

  useEffect(() => {
    fitted.current = false;
  }, [size.width, size.height, bounds]);

  useFrame(() => {
    const group = ref.current;
    if (fitted.current || !group || !bounds) return;

    const center = bounds.getCenter(new Vector3());
    const dims = bounds.getSize(new Vector3());

    const halfFov = (camera.fov * Math.PI) / 360;
    const fitHeight = (dims.y * margin) / 2 / Math.tan(halfFov);
    const fitWidth = (dims.x * margin) / 2 / (Math.tan(halfFov) * camera.aspect);
    const distance = Math.max(fitHeight, fitWidth);

    // Half the visible width at the figure's front plane, minus what the
    // figure (with margin) needs; shifting left by that slack left-aligns it
    const halfVisibleWidth = Math.tan(halfFov) * camera.aspect * distance;
    const slack = Math.max(0, halfVisibleWidth - (dims.x * margin) / 2);
    group.position.copy(center).negate();
    group.position.x -= slack;

    camera.position.set(0, 0, distance + dims.z / 2);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    fitted.current = true;
  });

  return <group ref={ref}>{children}</group>;
};

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { ref: canvasWrapRef, inView } = useInView('250px', false);
  const [mounted, setMounted] = useState(false);
  const [danceBounds, setDanceBounds] = useState(null);

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
      <section id="contact" ref={sectionRef} className="relative w-full pb-16 pt-20 md:py-32">
        <div className="mx-auto grid max-w-[980px] items-center gap-12 px-4 md:gap-x-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
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
          {/* On wide screens the canvas bleeds into the empty margin right of the
              980px column (keeping a 16px gutter) so the figure has room to dance.
              On phones it comes first, so the headline and buttons end the page
              right above the footer instead of scrolling up under the nav. */}
          <div
            ref={canvasWrapRef}
            className="contact-reveal order-first h-80 md:order-none md:-mr-[max(0px,calc((100vw-980px)/2-16px))] md:h-[min(65vh,480px)]"
          >
            {mounted && (
              <Canvas
                className="h-full w-full"
                dpr={1}
                frameloop={inView ? 'always' : 'never'}
                // Narrow lens from further back: the dance moves front-to-back too,
                // and a wide lens would shrink the figure toward the centre as it
                // steps away, breaking the left alignment
                camera={{ fov: 22 }}
                gl={{ antialias: false, powerPreference: 'high-performance', stencil: false }}
              >
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[8, 12, 8]} intensity={1.4} />
                  {/* Framed to the space the whole dance covers, so it fills the
                      canvas without stepping out of frame at any width */}
                  <FitToView bounds={danceBounds}>
                    <DanceFigure onBounds={setDanceBounds} />
                  </FitToView>
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
