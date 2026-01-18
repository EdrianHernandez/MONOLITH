import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = React.memo(({ projects }) => {
  return (
    <section className="project-showcase-section w-full">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="project-item relative w-full h-[85vh] md:h-screen overflow-hidden group border-b border-mono-black/10"
        >
          {/* Image Layer - using img tag for better LCP and SEO */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-mono-black/20 group-hover:bg-mono-black/10 transition-colors duration-500" />
          </div>

          {/* Large Vertical Title - Left aligned on desktop */}
          <div className="absolute top-0 left-0 h-full p-6 md:p-12 z-20 hidden md:flex flex-col justify-center items-center pointer-events-none">
             <h2 className="project-title-vertical vertical-rl rotate-180 text-6xl lg:text-8xl font-serif text-white tracking-tighter opacity-90 mix-blend-difference uppercase">
              {project.title}
            </h2>
          </div>

          {/* Mobile Title - Standard horizontal */}
          <div className="absolute top-8 left-6 md:hidden z-20">
             <h2 className="text-4xl font-serif text-white tracking-tight uppercase drop-shadow-md">
              {project.title}
            </h2>
          </div>

          {/* Project Details Overlay - Appears on right/bottom */}
          <div className="absolute bottom-0 right-0 p-6 md:p-16 max-w-lg text-right z-30 flex flex-col items-end transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <div className="project-meta-block mb-4 md:mb-8 space-y-1">
              <p className="text-white/80 font-sans text-sm tracking-widest uppercase border-b border-white/30 pb-2 mb-2 inline-block">
                {project.year} — {project.location}
              </p>
            </div>
            
            <p className="project-description text-white font-serif text-xl md:text-2xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 hidden md:block">
              {project.description}
            </p>
            
            <button className="mt-6 group/btn flex items-center gap-2 text-white font-sans text-sm tracking-widest uppercase hover:underline underline-offset-4">
              View Project <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Index Number */}
          <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20">
            <span className="font-sans text-white/60 text-xs md:text-sm tracking-widest">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
});

export default ProjectShowcase;