
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }
        
        setProjects(data || []);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
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
        
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-56 md:h-64 w-full" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[1, 2, 3].map((tag) => (
                      <Skeleton key={tag} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <div className="flex gap-3">
                    <Skeleton className="h-9 w-28" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image_url || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'}
                tags={project.tags || []}
                demoUrl={project.demo_url}
                githubUrl={project.github_url}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
