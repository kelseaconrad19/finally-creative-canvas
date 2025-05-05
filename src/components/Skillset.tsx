
import React from 'react';
import { 
  Code, 
  FileJson2, 
  Database, 
  Server, 
  Boxes, 
  Network, 
  DatabaseIcon, 
  MonitorPlay, 
  PanelRight, 
  Workflow, 
  LockKeyhole 
} from 'lucide-react';

type SkillCardProps = {
  icon: React.ReactNode;
  name: string;
  color: string;
}

const SkillCard = ({ icon, name, color }: SkillCardProps) => {
  return (
    <div className="bg-[#111518] rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-white/10">
      <div className={`text-${color} mb-3`}>
        {icon}
      </div>
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
};

const Skillset = () => {
  const skills = [
    { name: 'React', icon: <Code size={32} />, color: 'sky-400' },
    { name: 'JavaScript', icon: <FileJson2 size={32} />, color: 'yellow-400' },
    { name: 'PostgreSQL', icon: <Database size={32} />, color: 'cyan-400' },
    { name: 'Node.js', icon: <Server size={32} />, color: 'green-400' },
    { name: 'Express.js', icon: <Server size={32} />, color: 'green-400' },
    { name: 'Django', icon: <PanelRight size={32} />, color: 'blue-400' },
    { name: 'Bootstrap CSS', icon: <Boxes size={32} />, color: 'purple-400' },
    { name: 'APIs', icon: <Network size={32} />, color: 'orange-400' },
    { name: 'MySQL', icon: <DatabaseIcon size={32} />, color: 'cyan-400' },
    { name: 'Next.js', icon: <MonitorPlay size={32} />, color: 'blue-400' },
    { name: 'GraphQL', icon: <Workflow size={32} />, color: 'orange-400' },
    { name: 'Python', icon: <PanelRight size={32} />, color: 'blue-400' },
    { name: 'Flask', icon: <PanelRight size={32} />, color: 'blue-400' },
    { name: 'JWT Authentication', icon: <LockKeyhole size={32} />, color: 'red-400' },
  ];

  return (
    <section id="skillset" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-center mb-16 text-brand-pink">
          My Skillset
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon} 
              name={skill.name} 
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
