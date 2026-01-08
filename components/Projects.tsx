import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionId } from "../types";
import { PROJECTS } from "../constants";
import { ExternalLink, Github, Search } from "lucide-react";

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique tags from all projects
  const uniqueTags = useMemo(() => {
    return ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];
  }, []);

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesTag =
      selectedTag === "All" || project.tags.includes(selectedTag);
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id={SectionId.Projects} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-textSecondary">Some of my selected works</p>
        </motion.div>

        {/* Controls Container */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-start lg:items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-textSecondary" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 bg-surface border border-white/10 rounded-xl leading-5 text-white placeholder-textSecondary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-200 sm:text-sm"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-surface border border-white/10 text-textSecondary hover:bg-white/5 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
                >
                  {/* Card Image Area */}
                  <div className="h-64 bg-black/40 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
                    <img
                      // Use project image if available, otherwise fallback to placeholder
                      src={
                        project.image ||
                        `https://picsum.photos/800/600?random=${PROJECTS.findIndex(
                          (p) => p.name === project.name
                        )}`
                      }
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    {/* Floating Tags within Image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-20 -mt-12 flex flex-col grow">
                    <div className="bg-surface/60 backdrop-blur-xl border border-white/5 p-6 rounded-xl hover:bg-surface/80 transition-colors flex flex-col grow">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-textSecondary mb-6 text-sm leading-relaxed grow">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                        <button className="text-sm text-white hover:text-primary flex items-center gap-2 transition-colors">
                          <ExternalLink size={16} /> Live Demo
                        </button>
                        <button className="text-sm text-white hover:text-primary flex items-center gap-2 transition-colors">
                          <Github size={16} /> Code
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                  <Search className="w-8 h-8 text-textSecondary" />
                </div>
                <p className="text-textSecondary text-lg">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag("All");
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
