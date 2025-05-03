
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-orange/20 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="lg:w-7/12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Turning <span className="text-brand-purple">Digital</span> <span className="text-brand-pink">Dreams</span> Into <span className="text-white">Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Full-stack development that brings your ideas to life with bold, 
              creative solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-brand-orange/20 rounded-2xl animate-float"></div>
              <div className="relative glass-card p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">index.js</div>
                </div>
                <pre className="text-xs sm:text-sm bg-background/80 p-4 rounded overflow-hidden">
                  <code className="text-gray-200">
{`/* Kelsea Conrad - Full Stack Developer */
function createAmazing(idea) {
  const skills = ['React', 'Node.js', 'TypeScript'];
  const passion = 100;
  
  return {
    deliver: () => \`\${idea} brought to life!\`,
    onTime: true,
    withStyle: true,
    creativity: passion
  };
}

const myProject = createAmazing('Your Digital Dream');
console.log(myProject.deliver());`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
