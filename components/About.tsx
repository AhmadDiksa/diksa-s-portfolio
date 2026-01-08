import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Experienced in building modern web and mobile applications",
    "Strong knowledge in Laravel, Flutter, and API integration",
    "Focused on creating smooth UI and efficient system architecture"
  ];

  return (
    <section id={SectionId.About} className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              Hi, I’m Diksa — a web and mobile developer who loves turning ideas into clean, user-friendly digital experiences. I bridge the gap between robust backend logic and elegant frontend interfaces.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-white/10 relative group">
              {/* Decorative placeholder for visual style */}
              <img 
                src="/images/dioncrop.jpg"
                alt="Abstract representation" 
                // className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface border border-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md">
              <p className="text-accent font-bold text-4xl mb-1">1+</p>
              <p className="text-textSecondary text-sm">Years of<br/>Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;