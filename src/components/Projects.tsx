
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A complete online shopping solution with cart, checkout, and payment processing.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'E-commerce'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
      tags: ['React', 'TypeScript', 'Firebase', 'SaaS'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive data visualization for monitoring financial metrics and performance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      tags: ['React', 'D3.js', 'Node.js', 'Dashboard'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with authentication and data management.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80',
      tags: ['Node.js', 'Express', 'MongoDB', 'API'],
      category: 'backend',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Restaurant Booking System',
      description: 'Application for managing restaurant reservations, tables, and customer information.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
      tags: ['React', 'Next.js', 'PostgreSQL', 'Business'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Template',
      description: 'Customizable portfolio website template for creative professionals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
      tags: ['React', 'TailwindCSS', 'Responsive'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-8">
            Check out some of my recent work. Each project represents a unique challenge
            and creative solution.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <Button 
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-brand-purple" : ""}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
