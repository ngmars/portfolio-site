import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    company: 'DNV',
    role: 'Data Scientist',
    location: 'Hamburg, Germany',
    period: 'Jan 2024 – Present',
    year: '2024',
    logo: 'https://logo.clearbit.com/dnv.com',
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
    logo: 'https://logo.clearbit.com/commvault.com',
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
    logo: 'https://logo.clearbit.com/workindia.in',
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
    logo: 'https://logo.clearbit.com/globalfoundries.com',
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
    logo: 'https://logo.clearbit.com/acumensa.com',
    highlights: [
      'Developed a multilingual, customer-facing web application using React and Django',
      'Implemented role-based access control and integrated third-party messaging APIs',
    ],
  },
];

const CompanyLogo = ({ logo, company, fallback, size = 'md' }) => {
  const [imgError, setImgError] = useState(false);
  const sizeMap = {
    sm: 'h-9 w-9 text-xs',
    md: 'h-12 w-12 text-base',
    lg: 'h-16 w-16 text-lg',
  };
  const sizeClass = sizeMap[size] ?? sizeMap.md;

  if (imgError) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-lg bg-white/5 font-semibold text-white/80 ring-1 ring-white/10 ${sizeClass}`}
      >
        {fallback}
      </div>
    );
  }

  const imgSize = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-16 w-16' : 'h-12 w-12';
  return (
    <img
      src={logo}
      alt={`${company} logo`}
      className={`shrink-0 rounded-lg object-contain bg-white/5 p-1.5 ring-1 ring-white/10 ${imgSize}`}
      onError={() => setImgError(true)}
    />
  );
};

// Symmetric S: baseline 50, first curve peaks at 0, second curve valleys at 100 (equal amplitude)
const S_PATH = 'M 0 50 C 180 0 320 0 500 50 C 680 100 820 100 1000 50';

const NAVBAR_OFFSET = 64; // px for fixed navbar

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const spacerRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const cardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const check = () => {
      if (
        sectionRef.current &&
        pinWrapperRef.current &&
        spacerRef.current &&
        pathRef.current &&
        dotRef.current &&
        cardRef.current
      ) {
        setReady(true);
      }
    };
    check();
    const t = setTimeout(check, 200);
    return () => clearTimeout(t);
  }, []);

  // RAF loop: read scroll position every frame (works even if scroll events don't fire)
  useEffect(() => {
    if (!ready || !window.matchMedia('(min-width: 768px)').matches) return;

    const path = pathRef.current;
    const dot = dotRef.current;
    const card = cardRef.current;
    if (!path || !dot || !card) return;

    const pathLength = path.getTotalLength();

    const updateFromProgress = (progress) => {
      const p = Math.max(0, Math.min(1, progress));
      const point = path.getPointAtLength(p * pathLength);
      const xPercent = (point.x / 1000) * 100;

      // Dot is inside SVG - set cx/cy directly so it follows path exactly
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);

      gsap.set(card, {
        left: `${xPercent}%`,
        xPercent: -50,
      });

      const newIndex = Math.min(
        Math.floor(p * experiences.length),
        experiences.length - 1
      );
      setActiveIndex(newIndex);
    };

    const scrollDistance = 3 * window.innerHeight; // 3 screens of scroll

    let rafId;
    const tick = () => {
      const section = sectionRef.current;
      const pinEl = pinWrapperRef.current;
      const sectionRect = section?.getBoundingClientRect();
      const pinRect = pinEl?.getBoundingClientRect();
      const winH = window.innerHeight;

      // Pin when timeline top hits viewport top; unpin when section scrolls out of view
      // sectionRect.top <= 0 means we've scrolled into section; > 0 means scrolled up past it
      const scrolledIntoSection = sectionRect && sectionRect.top <= 0;
      const notScrolledPastSection = sectionRect && sectionRect.bottom > 0;
      const shouldPin =
        pinRect &&
        pinRect.top <= NAVBAR_OFFSET &&
        scrolledIntoSection &&
        notScrolledPastSection;
      setIsPinned((prev) => (prev !== shouldPin ? shouldPin : prev));

      // Progress: 0 when section top hits viewport top, 1 after scrolling 3 screens
      const progress =
        sectionRect && sectionRect.top <= 0
          ? Math.min(1, -sectionRect.top / scrollDistance)
          : 0;

      updateFromProgress(progress);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [ready]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full"
    >
      {/* Mobile: stacked cards */}
      <div className="space-y-6 px-4 pb-16 md:hidden">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="rounded-xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center gap-3">
              <CompanyLogo
                logo={exp.logo}
                company={exp.company}
                fallback={exp.company.slice(0, 2).toUpperCase()}
              />
              <div>
                <h3 className="font-semibold text-white">{exp.company}</h3>
                <p className="text-xs text-white/60">
                  {exp.role} · {exp.location} · {exp.period}
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#35c19f]/70" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop: placeholder only when pinned (reserves space for fixed timeline) */}
      {isPinned && (
        <div className="hidden h-screen md:block" aria-hidden="true" />
      )}

      {/* Desktop: pin wrapper - position:fixed when in view so timeline stays in place */}
      <div
        ref={pinWrapperRef}
        className="hidden md:block md:min-h-screen md:w-full"
        style={
          isPinned
            ? {
                position: 'fixed',
                top: NAVBAR_OFFSET,
                left: 0,
                right: 0,
                bottom: 'auto',
                height: `calc(100vh - ${NAVBAR_OFFSET}px)`,
                zIndex: 10,
              }
            : undefined
        }
      >
        {/* Section header */}
        <div className="relative z-10 py-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white/95 md:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-center text-sm text-white/50">
            Scroll to explore my journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex min-h-[70vh] min-w-full flex-1 items-center justify-center px-4 py-12 md:min-h-[calc(100vh-12rem)] md:px-12">
          <div className="relative h-full w-full max-w-6xl">
          {/* S-shaped wavy line */}
          <svg
            className="absolute left-0 top-1/2 h-40 w-full -translate-y-1/2 md:h-48"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d={S_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Optional glow */}
            <path
              d={S_PATH}
              fill="none"
              stroke="rgba(53,193,159,0.2)"
              strokeWidth="12"
              strokeLinecap="round"
              className="blur-sm"
            />
            {/* Dot inside SVG - follows path exactly in same coordinate system */}
            <circle
              ref={dotRef}
              cx={0}
              cy={50}
              r={6}
              fill="#35c19f"
              style={{ filter: 'drop-shadow(0 0 12px rgba(53,193,159,0.6))' }}
            />
          </svg>

          {/* Nodes: year + logo alternating above/below the line */}
          {experiences.map((exp, i) => {
            const leftPercent = (i / (experiences.length - 1)) * 100;
            const isAbove = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className="absolute flex flex-col items-center gap-2"
                style={{
                  left: `${leftPercent}%`,
                  top: isAbove ? 'calc(50% - 72px)' : 'calc(50% + 72px)',
                  transform: 'translate(-50%, 0)',
                }}
              >
                <CompanyLogo
                  logo={exp.logo}
                  company={exp.company}
                  fallback={exp.company.slice(0, 2).toUpperCase()}
                  size="lg"
                />
                <span className="text-xs font-medium tracking-wide text-white/60">
                  {exp.year}
                </span>
              </div>
            );
          })}

          {/* Job description card - always above the curve; logos stay alternating above/below */}
          <div
            ref={cardRef}
            className="absolute left-0 z-10 w-full max-w-sm -translate-x-1/2"
            style={{
              top: 'auto',
              bottom: 'calc(50% - 100px)',
            }}
          >
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`absolute inset-x-0 mx-auto transition-opacity duration-300 ${
                  i === activeIndex
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl shadow-black/30">
                  <div className="border-b border-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <CompanyLogo
                        logo={exp.logo}
                        company={exp.company}
                        fallback={exp.company.slice(0, 2).toUpperCase()}
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-semibold text-white">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-white/60">
                          {exp.role} · {exp.location}
                        </p>
                        <p className="text-[11px] text-white/40">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 p-4 pt-3">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-[13px] leading-relaxed text-white/80"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#35c19f]/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Spacer creates scroll room - dot moves as user scrolls through this */}
      <div
        ref={spacerRef}
        className="hidden h-[300vh] md:block"
        aria-hidden="true"
      />
    </section>
  );
};

export default ExperienceSection;
