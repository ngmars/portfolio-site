import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ACCENT = '#35c19f';

// Newest first (used for the mobile stacked list)
const experiences = [
  {
    company: 'DNV',
    role: 'Data Scientist',
    location: 'Hamburg, Germany',
    period: 'Jan 2024 – Present',
    year: '2024',
    logo: 'img/Company_logos/DNV_logo.png',
    highlights: [
      'Developing the TR10 tool in Python for operational site quality assessments using large-scale wind turbine data',
      'Implemented advanced data visualizations including power curve and curtailment analysis',
      'Built automated python pipeline for data collection and processing from PDFs',
      'Built a LiDAR monitoring dashboard integrating processed real time-series data',
    ],
  },
  {
    company: 'Commvault',
    role: 'Engineer',
    location: 'Bangalore, India',
    period: 'Mar 2022 – Oct 2023',
    year: '2022',
    logo: 'img/Company_logos/commvault_logo.png',
    highlights: [
      'Built backend services in C#, .NET, and C++ supporting backup, restore, and VM lifecycle operations',
      'Led migration of customer-facing backup and restore workflows from Angular to React',
      'Delivered scalable features in distributed infrastructure: snapshotting, disk-level restore, recovery flows',
    ],
  },
  {
    company: 'WorkIndia',
    role: 'Software Engineer',
    location: 'Bangalore, India',
    period: 'Jan 2022 – Mar 2022',
    year: '2022',
    logo: 'img/Company_logos/workindia_logo.png',
    highlights: [
      'Owned end-to-end development of ETL and ELT pipelines to unify siloed operational data',
      'Integrated Kafka-based streaming systems for scalable, near real-time data ingestion',
      'Automated cloud-based staging environments on AWS using Ansible',
    ],
  },
  {
    company: 'GlobalFoundries',
    role: 'UI/UX Intern',
    location: 'Bangalore, India',
    period: 'May 2021 – Nov 2021',
    year: '2021',
    logo: 'img/Company_logos/globalFoundries_logo.png',
    highlights: [
      'Built interactive, data-rich dashboards using React and Node.js for manufacturing analytics',
      'Integrated frontend applications with Snowflake-backed REST APIs',
      'Received Spotlight Award for production-ready visualization tooling',
    ],
  },
  {
    company: 'Acumensa Technologies',
    role: 'Full-Stack Intern',
    location: 'Bangalore, India',
    period: 'Jan 2021 – Apr 2021',
    year: '2021',
    logo: null,
    highlights: [
      'Developed a multilingual, customer-facing web application using React and Django',
      'Implemented role-based access control and integrated third-party messaging APIs',
    ],
  },
];

// Newest first for the snake timeline: row 1 left→right, row 2 right→left
const timeline = experiences;

const YEAR_TAGLINES = {
  2024: 'My most recent experience',
  2022: 'Levelling up in the industry',
  2021: 'Where it all started',
};

// Card centers in SVG viewBox units (1000 x 600).
// Row 1: three boxes, row 2: two boxes; the path snakes through them.
const ANCHORS = [
  { x: 160, y: 115 },
  { x: 500, y: 115 },
  { x: 840, y: 115 },
  { x: 660, y: 485 },
  { x: 320, y: 485 },
];

const SNAKE_PATH =
  'M 160 115 L 840 115 C 990 115 990 485 840 485 L 320 485';

const initialsOf = (company) =>
  company
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const CompanyLogo = ({ exp, className = '' }) => {
  if (!exp.logo) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/70 font-semibold text-white/80 shadow-xl backdrop-blur-md ${className}`}
      >
        {initialsOf(exp.company)}
      </div>
    );
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white p-1.5 shadow-xl ${className}`}
    >
      <img
        src={exp.logo}
        alt={`${exp.company} logo`}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const pathRef = useRef(null);
  const trailRef = useRef(null);
  const pointerRef = useRef(null);
  const yearRef = useRef(null);
  const taglineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ---------- Desktop: pinned snake timeline ----------
      mm.add('(min-width: 768px)', () => {
        const path = pathRef.current;
        const trail = trailRef.current;
        const pointer = pointerRef.current;
        if (!path || !trail || !pointer) return;

        const total = path.getTotalLength();

        // Progress fraction along the path for each card center
        const fractions = ANCHORS.map((a) => {
          let best = 0;
          let bestD = Infinity;
          for (let i = 0; i <= 400; i++) {
            const p = path.getPointAtLength((i / 400) * total);
            const d = (p.x - a.x) ** 2 + (p.y - a.y) ** 2;
            if (d < bestD) {
              bestD = d;
              best = i / 400;
            }
          }
          return best;
        });

        trail.style.strokeDasharray = `${total}`;
        trail.style.strokeDashoffset = `${total}`;

        let lastIndex = -1;
        const update = (progress) => {
          const p = Math.max(0, Math.min(1, progress));
          const len = p * total;
          const point = path.getPointAtLength(len);
          // viewBox is 1000 x 600 → convert to container percentages
          pointer.style.left = `${point.x / 10}%`;
          pointer.style.top = `${point.y / 6}%`;
          trail.style.strokeDashoffset = `${total * (1 - p)}`;

          let idx = 0;
          for (let i = 0; i < fractions.length; i++) {
            if (p >= fractions[i] - 0.02) idx = i;
          }
          if (idx !== lastIndex) {
            lastIndex = idx;
            const yearEl = yearRef.current;
            const taglineEl = taglineRef.current;
            if (yearEl && yearEl.textContent !== timeline[idx].year) {
              yearEl.textContent = timeline[idx].year;
              if (taglineEl) {
                taglineEl.textContent = YEAR_TAGLINES[timeline[idx].year] ?? '';
              }
              gsap.fromTo(
                [yearEl, taglineEl],
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.35, ease: 'power2.out', overwrite: true }
              );
            }
            setActiveIndex(idx);
          }
        };

        update(0);

        const st = ScrollTrigger.create({
          trigger: pinRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          onUpdate: (self) => update(self.progress),
          snap: {
            snapTo: fractions,
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: 'power1.inOut',
          },
        });

        return () => st.kill();
      });

      // ---------- Mobile: free-scrolling reveal animations ----------
      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray('.m-progress').forEach((el) => {
          gsap.fromTo(
            el,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'top 65%',
                end: 'bottom 65%',
                scrub: 0.4,
              },
            }
          );
        });
        gsap.utils.toArray('.m-card').forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="relative w-full">
      {/* ---------- Desktop: one-screen pinned snake timeline ---------- */}
      <div
        ref={pinRef}
        className="relative hidden h-screen w-full flex-col overflow-hidden md:flex"
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-2 px-4 pb-2 pt-20">
        {/* <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#35c19f]">
            Where I&apos;ve worked
          </p>*/}
          <h2 className="text-center text-4xl uppercase leading-[0.9] text-white lg:text-5xl">
            Experience
          </h2>
        </div>

        {/* Timeline stage */}
        <div className="relative mx-auto w-full max-w-7xl flex-1 px-8 pb-8 pt-2">
          <div className="relative h-full w-full">
            {/* Snake line */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d={SNAKE_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                ref={trailRef}
                d={SNAKE_PATH}
                fill="none"
                stroke={ACCENT}
                strokeWidth="3"
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0 0 6px ${ACCENT})` }}
              />
            </svg>

            {/* Year readout — sits between the two rows, follows the scroll */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center">
              <span
                ref={yearRef}
                className="font-Rajdhani text-6xl font-black leading-none text-white/20 lg:text-7xl"
              >
                {timeline[0].year}
              </span>
              <span
                ref={taglineRef}
                className="text-xs font-medium uppercase tracking-[0.25em] text-white/35"
              >
                {YEAR_TAGLINES[timeline[0].year]}
              </span>
            </div>

            {/* Pointer riding the line (rendered below the tiles so it never crosses them) */}
            <div
              ref={pointerRef}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${ANCHORS[0].x / 10}%`, top: `${ANCHORS[0].y / 6}%` }}
            >
              <div className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35c19f]/50" />
                <span
                  className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#35c19f]"
                  style={{ boxShadow: `0 0 16px ${ACCENT}` }}
                />
              </div>
            </div>

            {/* Experience boxes (solid background so the line passes behind, not through) */}
            {timeline.map((exp, i) => {
              const active = i === activeIndex;
              return (
                <div
                  key={exp.company}
                  className="absolute z-20 w-[30%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${ANCHORS[i].x / 10}%`,
                    top: `${ANCHORS[i].y / 6}%`,
                  }}
                >
                  <div
                    className={`rounded-lg border bg-[#0b0b0f] p-5 shadow-xl transition-all duration-500 ${
                      active
                        ? 'scale-100 border-[#35c19f]/60 shadow-[0_0_35px_rgba(53,193,159,0.18)]'
                        : 'scale-[0.97] border-white/15'
                    }`}
                  >
                    <div
                      className={`transition-opacity duration-500 ${
                        active ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                    <div className="flex items-center gap-4">
                      <CompanyLogo exp={exp} className="h-14 w-14 text-base" />
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-white lg:text-lg">
                          {exp.role}
                        </h3>
                        <p className="truncate text-sm text-white/60">
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className={`text-xs font-medium tracking-wide transition-colors duration-500 ${
                            active ? 'text-[#35c19f]' : 'text-white/40'
                          }`}
                        >
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-snug text-white/80"
                        >
                          <span
                            className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                              active ? 'bg-[#35c19f]' : 'bg-white/30'
                            }`}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Mobile: left spine, stacked cards ---------- */}
      <div className="relative px-4 pb-24 md:hidden">
        <div className="flex flex-col items-center gap-3 pb-12 pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#35c19f]">
            Where I&apos;ve worked
          </p>
          <h2 className="text-center text-4xl uppercase leading-[0.9] text-white">
            Experience
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-[23px] top-0 w-px bg-white/10" />
          <div
            className="m-progress pointer-events-none absolute bottom-0 left-[22px] top-0 w-[3px] origin-top rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}66)`,
              boxShadow: `0 0 10px ${ACCENT}80`,
            }}
          />
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-16">
                <div className="absolute left-0 top-0">
                  <CompanyLogo exp={exp} className="h-12 w-12 text-sm" />
                </div>
                <div className="m-card rounded-lg border border-white/20 bg-black/70 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="rounded-full border border-[#35c19f]/30 bg-[#35c19f]/10 px-3 py-0.5 text-[11px] font-medium tracking-wide text-[#35c19f]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-white/80"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#35c19f]/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
