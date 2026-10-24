import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { REVEAL, ANY_MOTION } from '../constants/motion';

gsap.registerPlugin(ScrollTrigger);

// Newest first
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
    role: 'Software Engineer Intern',
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
        className={`flex shrink-0 items-center justify-center rounded-2xl bg-white font-semibold text-ink-muted shadow-sm ${className}`}
      >
        {initialsOf(exp.company)}
      </div>
    );
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-sm ${className}`}
    >
      <img
        src={exp.logo}
        alt={`${exp.company} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const yearRef = useRef(null);

  useGSAP(
    () => {
      // Sticky year swaps as each role reaches the middle of the screen
      const setYear = (year) => {
        const el = yearRef.current;
        if (!el || el.textContent === year) return;
        el.textContent = year;
        gsap.fromTo(el, { autoAlpha: 0.2 }, { autoAlpha: 1, duration: 0.4, ease: 'power2.out', overwrite: true });
      };

      gsap.utils.toArray('.exp-role').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setYear(el.dataset.year),
          onEnterBack: () => setYear(el.dataset.year),
        });
      });

      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.utils.toArray('.exp-reveal').forEach((el) => {
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
    <section id="experience" ref={sectionRef} className="relative w-full bg-surface-light py-32 text-ink">
      <div className="mx-auto max-w-[980px] px-4">
        {/* Section header */}
        <div className="exp-reveal">
          <p className="eyebrow text-accent-ink">Experience</p>
          <h2 className="headline-lg mt-2 max-w-3xl">Five roles. One thread: data.</h2>
        </div>

        <div className="mt-20 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          {/* Desktop: sticky year */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <span
                ref={yearRef}
                className="block text-[clamp(80px,12vw,160px)] font-semibold leading-none tracking-[-0.04em] text-ink"
              >
                {experiences[0].year}
              </span>
            </div>
          </div>

          {/* Roles */}
          <div className="space-y-24">
            {experiences.map((exp) => (
              <article key={exp.company} data-year={exp.year} className="exp-role exp-reveal">
                {/* Mobile: year inline above each role */}
                <p className="mb-3 text-[40px] font-semibold leading-none tracking-[-0.03em] text-ink md:hidden">
                  {exp.year}
                </p>
                <div className="flex items-center gap-4">
                  <CompanyLogo exp={exp} className="h-14 w-14 text-sm" />
                  <div className="min-w-0">
                    <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.02em]">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-[15px] text-ink-muted">
                      {exp.company} · {exp.location} · {exp.period}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {exp.highlights.map((h, i) => (
                    <p key={i} className="text-[17px] leading-[1.5] text-ink/80">
                      {h}.
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
