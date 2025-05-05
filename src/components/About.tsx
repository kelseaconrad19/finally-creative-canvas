
import React from 'react';
import { ArrowRight, Code, Medal, LucideRocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/5">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <div className="inline-block mb-2 px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Passionate Developer Creating <span className="gradient-heading">Impactful Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm a full-stack developer with a passion for creating beautiful, functional applications
                that solve real problems. With a focus on modern technologies and clean code, I bring
                ideas to life with creativity and technical expertise.
              </p>
              <a
                href="#projects"
                className="group inline-flex items-center text-brand-purple font-medium"
              >
                View my projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <div className="grid gap-8">
              <FeatureCard
                icon={<Code className="h-8 w-8 text-brand-purple" />}
                title="Technical Expertise"
                description="Proficient in React, Node.js, TypeScript, and other modern web technologies. I build scalable, maintainable, and high-performance applications."
              />
              
              <FeatureCard
                icon={<LucideRocket className="h-8 w-8 text-brand-orange" />}
                title="Creative Problem Solver"
                description="I approach each project as a unique challenge, finding innovative solutions that balance technical requirements with user experience and business goals."
              />
              
              <FeatureCard
                icon={<Medal className="h-8 w-8 text-brand-blue" />}
                title="Quality Focused"
                description="I believe in doing things right the first time. My work is characterized by attention to detail, clean code, and thorough testing to ensure reliable, robust applications."
              />
              
              <div className="feature-card">
                <h3 className="text-xl font-bold mb-4">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js',
                    'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API',
                    'TailwindCSS', 'Responsive Design', 'UI/UX', 'Git'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="feature-card">
      <div className="inline-flex items-center justify-center p-3 bg-background/60 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default About;
