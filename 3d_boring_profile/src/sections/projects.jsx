import { useEffect, useId, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { REVEAL, ANY_MOTION } from '../constants/motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Super-Resolution Diffusion Model',
    description:
      'A UNet-based diffusion model that generates high-resolution radiation dose distribution maps for cancer treatment planning. Trained to distinguish different body tissue types and predict how radiation propagates through each, producing realistic dose-spread imagery.',
    tech: ['PyTorch', 'UNet', 'Diffusion Models'],
  },
  {
    title: 'PubMed Research Agent',
    description:
      'An LLM-powered research assistant for scientific literature. The agent orchestrates PubMed API calls end-to-end — searching, retrieving, and ranking publications — then synthesizes grounded, citation-aware answers through a retrieval-augmented generation pipeline backed by OpenSearch.',
    tech: ['LangChain', 'OpenSearch', 'Docker', 'Python'],
  },
  {
    title: 'AI Debugging Agent',
    description:
      'A multi-step autonomous agent that debugs code with minimal human input. It analyzes a codebase to localize faults, generates targeted tests to reproduce failures, and applies verified fixes — all coordinated through structured tool orchestration.',
    tech: ['Python', 'OpenAI API', 'Tool Orchestration'],
  },
  {
    title: 'Reinforcement Learning Agent for Bomberman',
    description:
      'A multi-agent RL agent for a Bomberman competition, evolved from Q-learning to DQN to a final PPO agent with action masking and a custom CNN over the board. The rule-based masks lifted the four-player win rate from 13% to 40%, alongside a 64% win rate in duels against the rule-based baseline.',
    tech: ['Python', 'PyTorch', 'Stable-Baselines3', 'Gymnasium'],
  }
];

// Gallery starts in line with the 980px content column, then bleeds off the right edge.
// % (not vw) so the scrollbar width doesn't push the cards out of line with the heading.
const GUTTER = 'max(16px, calc((100% - 980px) / 2 + 16px))';

// Cards grow with their content (min height, not fixed) and the row stretches
// them all to the tallest, so the image tile always matches the project cards.
const CARD_ITEM = 'proj-card flex w-[85vw] shrink-0 snap-start flex-col';
const CARD_FRAME =
  'relative flex min-h-[400px] flex-1 flex-col overflow-hidden rounded-[28px] bg-surface-card md:min-h-[min(48vh,440px)]';

// Opening tile — just the image, no caption
const CoverCard = () => (
  <li className={`${CARD_ITEM} md:w-[760px]`}>
    <div className={CARD_FRAME}>
      <img
        src="img/projects.jpeg"
        alt="Illustration of a workshop full of projects in progress"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  </li>
);

// Two panels: title and tech stack on the accent glow up top, then the
// description in a darker panel below a hairline so it reads as its own block.
// The top panel has the same fixed height on every card and the description
// panel fills the rest, so all description panels line up at the same height.
// On phones the description is clamped to three lines with a "Read more" toggle.
const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const descId = useId();
  return (
    <li className={`${CARD_ITEM} md:w-[560px]`}>
      <div className={CARD_FRAME}>
        <div
          className="flex h-[230px] shrink-0 flex-col justify-end p-8 md:h-[clamp(170px,26vh,230px)]"
          style={{
            background:
              'radial-gradient(120% 120% at 50% 100%, rgba(53,193,159,0.22) 0%, rgba(53,193,159,0.05) 45%, transparent 75%)',
          }}
        >
          <h3 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] text-white/70">{project.tech.join(' · ')}</p>
        </div>
        <div className="flex-1 border-t border-white/10 bg-black/30 px-8 py-6">
          <p
            id={descId}
            className={`text-[17px] leading-[1.47] text-white/75 md:line-clamp-none ${
              expanded ? '' : 'line-clamp-3'
            }`}
          >
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={descId}
            className="link-more mt-2 md:hidden"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      </div>
    </li>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Dim the arrows at either end of the row
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Step to the next/previous card's left edge (cards differ in width, so
  // a fixed step would drift)
  const step = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const firstLeft = track.querySelector('.proj-card')?.offsetLeft ?? 0;
    const offsets = [...track.querySelectorAll('.proj-card')].map((c) => c.offsetLeft - firstLeft);
    const current = track.scrollLeft;
    const target =
      dir > 0
        ? offsets.find((o) => o > current + 4)
        : [...offsets].reverse().find((o) => o < current - 4);
    if (target === undefined) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: target, behavior: reduce ? 'auto' : 'smooth' });
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.utils.toArray('.proj-reveal').forEach((el) => {
          gsap.from(el, {
            ...REVEAL,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        });
      });

      // Sections lazy-load in any order; re-measure so earlier pins don't leave stale trigger positions
      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full bg-surface-raised py-32">
      <div className="proj-reveal mx-auto max-w-[980px] px-4">
        <p className="eyebrow">Projects</p>
        <h2 className="headline-lg mt-2 text-white">Things I&apos;ve built lately.</h2>
      </div>

      <ul
        ref={trackRef}
        aria-label="Projects"
        className="proj-reveal mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: GUTTER, paddingRight: GUTTER, scrollPaddingLeft: GUTTER }}
      >
        <CoverCard />
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      <div className="mx-auto mt-8 flex max-w-[980px] justify-end gap-3 px-4">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={atStart}
          aria-label="Previous project"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 transition-colors duration-200 hover:bg-white/25 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/15"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={atEnd}
          aria-label="Next project"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 transition-colors duration-200 hover:bg-white/25 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/15"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
