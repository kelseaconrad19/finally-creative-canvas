
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoUrl, 
  githubUrl 
}: ProjectCardProps) => {
  return (
    <div className="group dark-glass rounded-xl overflow-hidden hover-card">
      <div className="overflow-hidden h-56 md:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-muted text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex gap-3">
          {demoUrl && (
            <Button asChild variant="outline" size="sm" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
