import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { REVEAL, ANY_MOTION } from '../constants/motion';

gsap.registerPlugin(ScrollTrigger);

// `image` is optional — tiles without one get a soft accent gradient
const projects = [
  {
    title: 'Super-Resolution Diffusion Model',
    tag: 'Deep learning · Medical imaging',
    summary:
      'Generates high-resolution radiation dose maps for cancer treatment planning.',
    description:
      'A UNet-based diffusion model that generates high-resolution radiation dose distribution maps for cancer treatment planning. Trained to distinguish different body tissue types and predict how radiation propagates through each, producing realistic dose-spread imagery.',
    tech: ['PyTorch', 'UNet', 'Diffusion Models'],
    image: 'img/projects.jpeg',
    featured: true,
  },
  {
    title: 'PubMed Research Agent',
    tag: 'LLM agents · RAG',
    summary:
      'Searches, ranks and cites scientific literature to answer research questions.',
    description:
      'An LLM-powered research assistant for scientific literature. The agent orchestrates PubMed API calls end-to-end — searching, retrieving, and ranking publications — then synthesizes grounded, citation-aware answers through a retrieval-augmented generation pipeline backed by OpenSearch.',
    tech: ['LangChain', 'OpenSearch', 'Docker', 'Python'],
  },
  {
    title: 'AI Debugging Agent',
    tag: 'Agentic tooling',
    summary:
      'Finds the fault, writes a failing test, and ships a verified fix.',
    description:
      'A multi-step autonomous agent that debugs code with minimal human input. It analyzes a codebase to localize faults, generates targeted tests to reproduce failures, and applies verified fixes — all coordinated through structured tool orchestration.',
    tech: ['Python', 'OpenAI API', 'Tool Orchestration'],
  }
];

const ProjectTile = ({ project }) => (
  <article
    className={`proj-tile card-apple flex flex-col ${
      project.featured ? 'md:col-span-2 md:min-h-[560px]' : 'md:min-h-[480px]'
    }`}
  >
    <div className="p-8 md:p-10">
      <p className="eyebrow">{project.tag}</p>
      <h3 className="mt-2 max-w-2xl text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl text-[17px] leading-[1.5] text-white/80">{project.summary}</p>
      <p className="mt-4 text-[14px] text-muted">{project.tech.join(' · ')}</p>
      <details className="group mt-5">
        <summary className="link-more cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Read more</span>
          <span className="hidden group-open:inline">Show less</span>
        </summary>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.6] text-muted">{project.description}</p>
      </details>
    </div>

    {/* Visual area */}
    <div className="relative mt-auto min-h-[200px] flex-1 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="proj-img absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 100%, rgba(53,193,159,0.18) 0%, rgba(53,193,159,0.04) 45%, transparent 75%)',
          }}
        />
      )}
    </div>
  </article>
);

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.utils.toArray('.proj-reveal, .proj-tile').forEach((el) => {
          gsap.from(el, {
            ...REVEAL,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        });
        // Gentle settle on images as they scroll in
        gsap.utils.toArray('.proj-img').forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: { trigger: img, start: 'top bottom', end: 'center center', scrub: true },
            }
          );
        });
      });

      // Sections lazy-load in any order; re-measure so earlier pins don't leave stale trigger positions
      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full bg-surface-raised py-32">
      <div className="mx-auto max-w-[980px] px-4">
        <div className="proj-reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="headline-lg mt-2 text-white">Things I&apos;ve built lately.</h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectTile key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
