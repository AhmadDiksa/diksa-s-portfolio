import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Server, 
  Layers, 
  Database, 
  Palette, 
  Code, 
  Atom, 
  FileCode, 
  Wind 
} from 'lucide-react';

const Skills: React.FC = () => {
  const getSkillIcon = (skill: string) => {
    const iconProps = { className: "w-8 h-8 mb-3 text-primary group-hover:text-accent transition-colors duration-300" };
    
    switch (skill) {
      case "Web Development": return <Globe {...iconProps} />;
      case "Mobile Development": return <Smartphone {...iconProps} />;
      case "Laravel": return <Server {...iconProps} />;
      case "Flutter": return <Layers {...iconProps} />;
      case "REST API": return <Database {...iconProps} />;
      case "UI/UX Fundamentals": return <Palette {...iconProps} />;
      case "HTML/CSS/JS": return <Code {...iconProps} />;
      case "React": return <Atom {...iconProps} />;
      case "TypeScript": return <FileCode {...iconProps} />;
      case "Tailwind CSS": return <Wind {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  return (
    <section id={SectionId.Skills} className="py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Cpu className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            Technical Skills
          </h2>
          <p className="text-textSecondary">Technologies & tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: "rgba(90, 99, 240, 0.5)" }}
              className="group p-6 rounded-xl bg-surface border border-white/10 flex flex-col items-center justify-center text-center font-medium text-gray-300 hover:text-white hover:bg-surface/80 hover:border-primary/50 transition-all duration-300 shadow-sm cursor-default"
            >
              {getSkillIcon(skill)}
              <span className="text-sm md:text-base">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;