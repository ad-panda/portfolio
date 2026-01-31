
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center space-x-4">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className="text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-external-link-alt text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
