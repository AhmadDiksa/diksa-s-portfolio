import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionId } from "../types";

const Hero: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={SectionId.Hero}
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-6">
            Available for Hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Ahmad Diksa <br className="hidden md:block" /> Sumadiono
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-textSecondary mb-10 max-w-2xl mx-auto"
        >
          Web & Mobile Developer focused on building clean, performant, and
          user-centric digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection(SectionId.Projects)}
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center group"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/cv/Ahmad Diksa Sumadiono-resume.pdf"
            download="Ahmad Diksa Sumadiono-resume.pdf"
            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors"
          >
            Download CV
          </a>
          <button
            onClick={() => scrollToSection(SectionId.Contact)}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
