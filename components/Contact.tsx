import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SOCIALS } from '../constants';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Instagram': return <Instagram size={20} />;
      default: return null;
    }
  };

  return (
    <footer id={SectionId.Contact} className="py-24 px-6 bg-gradient-to-b from-background to-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Let’s collaborate.
          </h2>
          <p className="text-xl text-textSecondary mb-12">
            Ready to build something amazing? Drop me a line.
          </p>

          <a
            href="mailto:dionjombang300@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform duration-300 mb-16"
          >
            <Mail size={20} />
            dionjombang300@gmail.com
          </a>

          <div className="flex justify-center gap-8">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="text-textSecondary hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
          
          <div className="mt-24 text-sm text-textSecondary/50">
            © {new Date().getFullYear()} Ahmad Diksa Sumadiono. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;