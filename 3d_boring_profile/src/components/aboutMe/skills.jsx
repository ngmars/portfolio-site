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
    sm: { wrapper: 'h-9 w-9 shrink-0', icon: 'size-7', text: 'text-[10px]' },
    md: { wrapper: 'h-10 w-10 shrink-0', icon: 'size-8', text: 'text-xs' },
    lg: { wrapper: 'h-11 w-11 shrink-0', icon: 'size-9', text: 'text-xs' },
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
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
        {title}
      </h3>
    )}
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map(({ icon, name, color }) => (
        <SkillItem key={name} icon={icon} name={name} color={color} size={size} />
      ))}
    </div>
  </div>
);

const Card = ({ children, className = '', size = 'md' }) => {
  const padding = {
    sm: 'p-6',
    md: 'p-7',
    lg: 'p-8',
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
    <div className="skills-card grid min-h-0 max-h-[calc(100vh-6rem)] w-full max-w-4xl grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 md:grid-rows-3 md:gap-5">
      {/* Programming Languages + Full Stack - large, top-left */}
      <Card className="flex min-h-0 flex-col items-center text-center md:col-span-2 md:row-span-2" size="lg">
        <h2 className="mb-4 text-lg font-semibold uppercase text-white">
          Programming Languages
        </h2>
        <div className="mb-4">
          <SkillSection skills={programmingLanguages} size="lg" />
        </div>
        <div className="w-full flex-1 rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase text-white/80">
            Full Stack
          </h3>
          <div className="grid grid-cols-3 justify-items-center gap-4">
            {fullStack.map(({ icon, name, color }) => (
              <SkillItem
                key={name}
                icon={icon}
                name={name}
                color={color}
                size="lg"
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Machine Learning - small, top-right */}
      <Card className="flex min-h-0 flex-col items-center text-center" size="sm">
        <h2 className="mb-4 text-base font-semibold uppercase text-white">
          Machine Learning
        </h2>
        <SkillSection skills={machineLearning} size="md" />
      </Card>

      {/* Data - small, middle-right */}
      <Card className="flex min-h-0 flex-col items-center text-center" size="sm">
        <h2 className="mb-4 text-base font-semibold uppercase text-white">
          Data
        </h2>
        <SkillSection skills={databases} size="md" />
      </Card>

      {/* Cloud & Data - long, full width bottom with sub-tiles */}
      <Card className="flex min-h-0 flex-col items-center text-center md:col-span-3" size="md">
        <div className="flex w-full flex-1 flex-col gap-4 md:flex-row md:gap-6">
          <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-7 text-center">
            <h3 className="mb-4 text-sm font-semibold uppercase text-white/80">
              DevOps
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {dataAndDevOps.map(({ icon, name, color }) => (
                <SkillItem key={name} icon={icon} name={name} color={color} size="lg" />
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-7 text-center">
            <h3 className="mb-4 text-sm font-semibold uppercase text-white/80">
              Cloud
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
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
