import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ACCENT = '#35c19f';

// Scroll progress at which each tile becomes the highlighted one
const HIGHLIGHT_AT = [0, 0.55, 0.78];

const projects = [
  {
    title: 'PubMed Research Agent',
    tag: 'LLM Agents · RAG',
    description:
      'An LLM-powered research assistant for scientific literature. The agent orchestrates PubMed API calls end-to-end — searching, retrieving, and ranking publications — then synthesizes grounded, citation-aware answers through a retrieval-augmented generation pipeline backed by OpenSearch.',
    tech: ['LangChain', 'OpenSearch', 'Docker', 'Python'],
  },
  {
    title: 'AI Debugging Agent',
    tag: 'Agentic Tooling',
    description:
      'A multi-step autonomous agent that debugs code with minimal human input. It analyzes a codebase to localize faults, generates targeted tests to reproduce failures, and applies verified fixes — all coordinated through structured tool orchestration.',
    tech: ['Python', 'OpenAI API', 'Tool Orchestration'],
  },
  {
    title: 'Super-Resolution Diffusion Model',
    tag: 'Deep Learning · Medical Imaging',
    description:
      'A UNet-based diffusion model that generates high-resolution radiation dose distribution maps for cancer treatment planning. Trained to distinguish different body tissue types and predict how radiation propagates through each, producing realistic dose-spread imagery.',
    tech: ['PyTorch', 'UNet', 'Diffusion Models'],
  },
];

const ProjectCard = ({ project, index, active }) => (
  <div
    className={`proj-card group relative overflow-hidden rounded-xl border bg-[#0b0b0f] shadow-2xl transition-all duration-500 ${
      active
        ? 'scale-100 border-[#35c19f]/60 shadow-[0_0_35px_rgba(53,193,159,0.18)]'
        : 'scale-[0.97] border-white/15'
    }`}
  >
    {/* Accent glow along the top edge */}
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500 ${
        active ? 'opacity-100' : 'opacity-25'
      }`}
      style={{
        background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
      }}
    />
    <div
      className={`p-[clamp(0.75rem,2.2vh,1.5rem)] transition-opacity duration-500 ${
        active ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="flex items-baseline gap-[clamp(0.625rem,1.8vh,1rem)]">
        <span className="font-Rajdhani text-[clamp(1.75rem,5vh,3rem)] font-black leading-none text-white/15">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <p
            className={`text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-500 ${
              active ? 'text-[#35c19f]' : 'text-white/40'
            }`}
          >
            {project.tag}
          </p>
          <h3 className="mt-1 text-[clamp(1rem,2.6vh,1.5rem)] font-semibold text-white">
            {project.title}
          </h3>
        </div>
      </div>
      {/* Description collapses on inactive tiles so all three fit on screen */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          active
            ? 'mt-[clamp(0.375rem,1.2vh,0.75rem)] max-h-[26vh] opacity-100'
            : 'mt-0 max-h-0 opacity-0'
        }`}
      >
        <p className="text-[clamp(0.75rem,1.8vh,0.875rem)] leading-relaxed text-white/70">
          {project.description}
        </p>
      </div>
      {/* Tech pills stay visible even when the tile is collapsed */}
      <div className="mt-[clamp(0.5rem,1.6vh,1rem)] flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[#35c19f]/30 bg-[#35c19f]/10 px-3 py-1 text-[11px] font-medium tracking-wide text-[#35c19f]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const imgWrapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ---------- Desktop: pinned image + tile highlights ----------
      mm.add('(min-width: 768px)', () => {
        const imgWrap = imgWrapRef.current;
        if (!imgWrap) return;

        const slides = gsap.utils.toArray('.proj-slide');

        // Start state: image centered and dominant, tiles hidden off to the right
        gsap.set(imgWrap, { left: '50%', xPercent: -50, yPercent: -50, width: '64%' });
        gsap.set(slides, { autoAlpha: 0, x: 80 });

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              let idx = 0;
              for (let i = 0; i < HIGHLIGHT_AT.length; i++) {
                if (self.progress >= HIGHLIGHT_AT[i]) idx = i;
              }
              setActiveIndex(idx);
            },
          },
        });

        // Phase 1 — image shrinks, glides left, and tilts toward the tiles
        tl.to(imgWrap, {
          left: '19%',
          width: '34%',
          rotateY: 18,
          transformPerspective: 1400,
          duration: 1.2,
        })
          // All three tiles slide in from the right
          .to(slides, { autoAlpha: 1, x: 0, stagger: 0.15, duration: 0.8 }, '-=0.5')
          // Phase 2 — scroll runway while the highlight walks down the tiles
          .to({}, { duration: 2.5 });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      // ---------- Mobile: image on top, stacked cards ----------
      mm.add('(max-width: 767px)', () => {
        gsap.from('.m-proj-img', {
          autoAlpha: 0,
          y: 40,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.m-proj-img', start: 'top 85%', once: true },
        });
        gsap.utils.toArray('.m-proj-card').forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full">
      {/* ---------- Desktop: pinned showcase ---------- */}
      <div
        ref={pinRef}
        className="relative hidden h-screen w-full flex-col overflow-hidden md:flex"
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-[clamp(0.25rem,1vh,0.5rem)] px-4 pb-[clamp(0.5rem,2vh,1rem)] pt-[clamp(4.75rem,11vh,5rem)]">
          <p className="text-[clamp(0.6875rem,1.6vh,0.875rem)] font-medium uppercase tracking-[0.3em] text-[#35c19f]">
            What I&apos;ve been building
          </p>
          <h2 className="text-center text-[clamp(1.75rem,4.5vh,3rem)] uppercase leading-[0.9] text-white">
            Recent Projects
          </h2>
        </div>

        {/* Stage */}
        <div className="relative mx-auto w-full max-w-7xl flex-1 px-8 pb-[clamp(0.75rem,3vh,2.5rem)]">
          <div className="relative h-full w-full" style={{ perspective: '1400px' }}>
            {/* Workshop image — starts centered, ends angled on the left */}
            <div
              ref={imgWrapRef}
              className="absolute top-1/2 max-h-full"
              style={{ aspectRatio: '3 / 2' }}
            >
              <img
                src="img/projects.jpeg"
                alt="Workshop illustration"
                className="h-full w-full rounded-xl border border-white/15 object-cover shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl"
                style={{ boxShadow: `inset 0 0 60px rgba(0,0,0,0.35), 0 0 45px ${ACCENT}22` }}
              />
            </div>

            {/* All three tiles, highlighted one by one on scroll */}
            <div className="absolute inset-y-0 left-[42%] right-0 flex items-center">
              <div className="flex w-full flex-col gap-[clamp(0.5rem,1.6vh,1rem)]">
                {projects.map((project, i) => (
                  <div key={project.title} className="proj-slide">
                    <ProjectCard
                      project={project}
                      index={i}
                      active={i === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile: image + stacked cards ---------- */}
      <div className="px-4 pb-24 md:hidden">
        <div className="flex flex-col items-center gap-2 pb-10 pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#35c19f]">
            What I&apos;ve been building
          </p>
          <h2 className="text-center text-4xl uppercase leading-[0.9] text-white">
            Recent Projects
          </h2>
        </div>
        <img
          src="img/projects.jpeg"
          alt="Workshop illustration"
          className="m-proj-img mb-10 w-full rounded-xl border border-white/15 object-cover shadow-2xl"
          loading="lazy"
          decoding="async"
        />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={project.title} className="m-proj-card">
              <ProjectCard project={project} index={i} active />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
