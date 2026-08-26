import {
  SiReact,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiOpenai,
  SiApachekafka,
  SiDatabricks,
  SiVmware,
  SiNutanix,
  SiDocker,
  SiAnsible,
  SiGit,
} from 'react-icons/si';
import { FaAws, FaCloud } from 'react-icons/fa6';
import { TbDatabase } from 'react-icons/tb';

const SkillItem = ({ icon: Icon, name, color, size = 'md' }) => {
  const config = {
    sm: {
      wrapper: 'size-[clamp(1.75rem,4.3vh,2.25rem)] shrink-0',
      icon: 'size-[clamp(1.375rem,3.4vh,1.75rem)]',
      text: 'text-[clamp(8px,1.4vh,10px)]',
    },
    md: {
      wrapper: 'size-[clamp(1.875rem,4.7vh,2.5rem)] shrink-0',
      icon: 'size-[clamp(1.5rem,3.8vh,2rem)]',
      text: 'text-[clamp(9px,1.6vh,12px)]',
    },
    lg: {
      wrapper: 'size-[clamp(2rem,5.2vh,2.75rem)] shrink-0',
      icon: 'size-[clamp(1.625rem,4.3vh,2.25rem)]',
      text: 'text-[clamp(9px,1.6vh,12px)]',
    },
    xl: {
      wrapper: 'size-[clamp(2.5rem,7vh,4rem)] shrink-0',
      icon: 'size-[clamp(2rem,5.8vh,3.25rem)]',
      text: 'text-[clamp(10px,1.8vh,14px)]',
    },
  };
  const { wrapper, icon: iconSize, text } = config[size];
  return (
    <div className="flex min-w-0 shrink-0 flex-col items-center gap-1">
      <div
        className={`flex ${wrapper} items-center justify-center overflow-hidden text-white transition-colors duration-200 group-hover:text-[var(--icon-color)]`}
        style={{ '--icon-color': color }}
      >
        <Icon className={`${iconSize} shrink-0`} />
      </div>
      <span className={`max-w-[5.5rem] truncate text-center font-medium text-white/90 ${text}`}>
        {name}
      </span>
    </div>
  );
};

const SkillSection = ({ title, skills, size = 'md' }) => (
  <div className="min-w-0 overflow-hidden text-center">
    {title && (
      <h3 className="mb-[clamp(0.25rem,1.2vh,0.75rem)] text-[clamp(0.6875rem,1.6vh,0.875rem)] font-semibold uppercase tracking-wider text-white/70">
        {title}
      </h3>
    )}
    <div className="flex flex-wrap justify-center gap-[clamp(0.375rem,1.3vh,0.75rem)]">
      {skills.map(({ icon, name, color }) => (
        <SkillItem key={name} icon={icon} name={name} color={color} size={size} />
      ))}
    </div>
  </div>
);

const Card = ({ children, className = '', size = 'md' }) => {
  const padding = {
    sm: 'p-[clamp(0.625rem,2.2vh,1.5rem)]',
    md: 'p-[clamp(0.75rem,2.6vh,1.75rem)]',
    lg: 'p-[clamp(0.875rem,3vh,2rem)]',
  };
  return (
    <div
      className={`group overflow-hidden rounded-lg border border-white/20 bg-black/70 shadow-xl backdrop-blur-md transition-colors duration-200 ${padding[size]} ${className}`}
    >
      {children}
    </div>
  );
};

const SkillsCard = () => {
  const programmingLanguages = [
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  ];

  const fullStack = [
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiReact, name: 'React.js', color: '#61DAFB' },
    { icon: SiFlask, name: 'Flask', color: '#C9C9C9' },
    { icon: SiDjango, name: 'Django', color: '#44B78B' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  ];

  const databases = [
    { icon: TbDatabase, name: 'Vector DB', color: '#6366f1' },
    { icon: SiPostgresql, name: 'SQL', color: '#336791' },
    { icon: SiMongodb, name: 'NoSQL', color: '#47A248' },
    { icon: SiApachekafka, name: 'Kafka', color: '#A0AEC0' },
    { icon: SiDatabricks, name: 'ETL/ELT', color: '#FF3621' },
  ];

  const cloud = [
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
    { icon: FaCloud, name: 'Azure', color: '#0078D4' },
    { icon: SiVmware, name: 'VMware', color: '#A0AEC0' },
    { icon: SiNutanix, name: 'Nutanix', color: '#3B82F6' },
  ];

  const machineLearning = [
    { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
    { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
    { icon: SiLangchain, name: 'LangChain', color: '#10A37F' },
    { icon: SiOpenai, name: 'OpenAI Assistants', color: '#412991' },
  ];

  const dataAndDevOps = [
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiAnsible, name: 'Ansible', color: '#EE0000' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
  ];

  return (
    <div className="skills-card mx-auto grid min-h-0 w-full max-w-4xl grid-cols-1 gap-4 md:min-h-0 md:flex-1 md:grid-cols-3 md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-[clamp(0.5rem,2vh,1.25rem)]">
      {/* Programming Languages + Full Stack - large, top-left */}
      <Card className="flex min-h-0 flex-col items-center text-center md:col-span-2 md:row-span-2" size="lg">
        <h2 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.8125rem,2.2vh,1.125rem)] font-semibold uppercase text-white">
          Programming Languages
        </h2>
        <div className="mb-[clamp(0.375rem,1.5vh,1rem)]">
          <SkillSection skills={programmingLanguages} size="lg" />
        </div>
        <div className="flex w-full min-h-0 flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-[clamp(0.625rem,2.2vh,1.5rem)]">
          <h3 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.6875rem,1.6vh,0.875rem)] font-semibold uppercase text-white/80">
            Full Stack
          </h3>
          <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 place-items-center gap-[clamp(0.375rem,1.4vh,1rem)]">
            {fullStack.map(({ icon, name, color }) => (
              <SkillItem
                key={name}
                icon={icon}
                name={name}
                color={color}
                size="xl"
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Machine Learning - small, top-right */}
      <Card className="flex min-h-0 flex-col items-center text-center" size="sm">
        <h2 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.75rem,2vh,1rem)] font-semibold uppercase text-white">
          Machine Learning
        </h2>
        <SkillSection skills={machineLearning} size="md" />
      </Card>

      {/* Data - small, middle-right */}
      <Card className="flex min-h-0 flex-col items-center text-center" size="sm">
        <h2 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.75rem,2vh,1rem)] font-semibold uppercase text-white">
          Data
        </h2>
        <SkillSection skills={databases} size="md" />
      </Card>

      {/* Cloud & Data - long, full width bottom with sub-tiles */}
      <Card className="flex min-h-0 flex-col items-center text-center md:col-span-3" size="md">
        <div className="flex w-full min-h-0 flex-1 flex-col gap-4 md:flex-row md:gap-[clamp(0.75rem,2.2vh,1.5rem)]">
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-[clamp(0.625rem,2.2vh,1.75rem)] text-center">
            <h3 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.6875rem,1.6vh,0.875rem)] font-semibold uppercase text-white/80">
              DevOps
            </h3>
            <div className="flex flex-wrap justify-center gap-[clamp(0.375rem,1.4vh,1rem)]">
              {dataAndDevOps.map(({ icon, name, color }) => (
                <SkillItem key={name} icon={icon} name={name} color={color} size="lg" />
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-[clamp(0.625rem,2.2vh,1.75rem)] text-center">
            <h3 className="mb-[clamp(0.375rem,1.5vh,1rem)] text-[clamp(0.6875rem,1.6vh,0.875rem)] font-semibold uppercase text-white/80">
              Cloud
            </h3>
            <div className="flex flex-wrap justify-center gap-[clamp(0.375rem,1.4vh,1rem)]">
              {cloud.map(({ icon, name, color }) => (
                <SkillItem key={name} icon={icon} name={name} color={color} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillsCard;
