
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Playful decorative elements */}
      <div className="absolute top-20 right-10 w-12 h-12 bg-brand-orange/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-10 w-8 h-8 bg-brand-blue/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brand-purple/20 rounded-full animate-float"></div>
      
      {/* Original background shapes with more playful positioning */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="lg:w-7/12">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight relative z-10">
                Turning <span className="gradient-heading relative">Digital Dreams</span> Into Reality
                <span className="absolute -top-4 -right-4 text-brand-orange">
                  <Sparkles className="w-8 h-8 animate-pulse-slow" />
                </span>
              </h1>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-24 bg-brand-purple rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Full-stack development that brings your ideas to life with bold, creative solutions. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 transform transition-transform hover:scale-105">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 transform transition-transform hover:scale-105">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="relative group">
              {/* Playful decorative elements behind the code window */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-brand-orange/20 rounded-2xl animate-float group-hover:bg-brand-orange/30 transition-colors"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-blue/20 rounded-2xl animate-float animation-delay-1000 group-hover:bg-brand-blue/30 transition-colors"></div>
              
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">index.js</div>
                </div>
                <pre className="text-xs sm:text-sm bg-gray-50 p-4 rounded overflow-hidden">
                  <code className="text-gray-800">
{`/* Finally Creative */
function createAmazing() {
  const skills = ['React', 'Node.js', 'TypeScript'];
  const creativity = 100;
  
  return {
    deliver: () => 'Your dream project',
    onTime: true,
    withStyle: true
  };
}`}
                  </code>
                </pre>
                
                {/* Playful addition: typing cursor */}
                <div className="h-4 w-2 bg-brand-purple animate-pulse mt-2 ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
