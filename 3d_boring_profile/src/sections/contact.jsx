import { useRef, Suspense, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Canvas } from '@react-three/fiber';
import DanceFigure from '../components/contact/danceFigure';
import CanvasLoader from '../components/canvasLoader';
import useInView from '../hooks/useInView';

gsap.registerPlugin(ScrollTrigger);

const ACCENT = '#35c19f';

// ── Fill these in ──────────────────────────────────────────────
const LINKS = {
  linkedin: 'https://www.linkedin.com/in/nitish-gopinath/', // e.g. https://www.linkedin.com/in/your-handle
  github: 'https://github.com/ngmars', // e.g. https://github.com/your-handle
  email: 'mailto:nitish.gopinath@email.com',
  resume: 'https://drive.google.com/file/d/1nsw0s1mJpdtYBa9AnOCfNsMplgMJJgcm/view?usp=sharing', // drop the file into public/
};
// ───────────────────────────────────────────────────────────────

const socials = [
  {
    name: 'LinkedIn',
    handle: 'Connect professionally',
    href: LINKS.linkedin,
    icon: faLinkedinIn,
  },
  {
    name: 'GitHub',
    handle: 'See what I build',
    href: LINKS.github,
    icon: faGithub,
  },
  {
    name: 'Email',
    handle: 'nitish.gopinath@gmail.com',
    href: LINKS.email,
    icon: faEnvelope,
  },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { ref: canvasWrapRef, inView } = useInView('250px', false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) setMounted(true);
  }, [inView]);

  useGSAP(
    () => {
      gsap.from('.contact-reveal', {
        autoAlpha: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="contact" ref={sectionRef} className="relative w-full px-4 pb-10 pt-28 md:px-8">
      {/* Header */}
      <div className="contact-reveal flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#35c19f]">
          Get in touch
        </p>
        <h2 className="text-4xl uppercase leading-[0.9] text-white lg:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          Open to interesting problems, collaborations, and new opportunities.
          Reach out on any of these — I&apos;ll get back to you quickly.
        </p>
      </div>

      {/* Social tiles — animated as one block so they stay on a straight line */}
      <div className="contact-reveal mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#0b0b0f] p-6 text-center shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#35c19f]/60 hover:shadow-[0_0_35px_rgba(53,193,159,0.18)]"
          >
            {/* Accent glow along the top edge */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
              }}
            />
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#35c19f]/30 bg-[#35c19f]/10 text-xl text-[#35c19f] transition-transform duration-500 group-hover:scale-110">
              <FontAwesomeIcon icon={social.icon} />
            </div>
            <p className="mt-4 font-semibold text-white">{social.name}</p>
            <p className="mt-1 text-xs text-white/50">{social.handle}</p>
          </a>
        ))}
      </div>

      {/* Resume button */}
      <div className="contact-reveal mt-12 flex justify-center">
        <a
          href={LINKS.resume}
          download
          className="group inline-flex items-center gap-3 rounded-full bg-[#35c19f] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0b0b0f] shadow-[0_0_30px_rgba(53,193,159,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(53,193,159,0.55)]"
        >
          <FontAwesomeIcon
            icon={faDownload}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
          Download Resume
        </a>
      </div>

      {/* 3D send-off — same character as the hero, busting a move */}
      <div ref={canvasWrapRef} className="contact-reveal mx-auto mt-8 h-80 w-full max-w-3xl md:h-96">
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

      {/* Footer */}
      <div className="contact-reveal mt-20 border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Nitish Gopinath · Built with React, Three.js &amp; GSAP
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
