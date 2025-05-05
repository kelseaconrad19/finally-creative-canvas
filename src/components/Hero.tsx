
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-purple/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-brand-pink/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-[80px]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="lg:w-7/12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Turning <span className="gradient-heading">Digital Dreams</span> Into <span className="text-white">Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Full-stack development that brings your ideas to life with bold, 
              creative solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="relative">
              {/* Animated glow effect behind the code editor */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 via-brand-pink/20 to-brand-orange/30 rounded-xl blur-xl animate-pulse-slow"></div>
              
              {/* Code editor container */}
              <div className="relative dark-glass rounded-xl overflow-hidden border border-white/10 shadow-xl">
                {/* Code editor header */}
                <div className="flex items-center justify-between px-4 py-3 bg-background/80 border-b border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Code className="h-3.5 w-3.5 mr-1.5" />
                    <span>developer.js</span>
                  </div>
                  <div className="flex">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-white transition-colors" />
                  </div>
                </div>
                
                {/* Code content with line numbers */}
                <div className="relative p-5 font-mono text-sm">
                  <div className="grid grid-cols-[auto,1fr] gap-x-4">
                    {/* Line numbers */}
                    <div className="text-muted-foreground text-right select-none">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                    </div>
                    
                    {/* Code */}
                    <div>
                      <div><span className="text-purple-400">/* Kelsea Conrad - Full Stack Developer */</span></div>
                      <div><span className="text-blue-400">function</span> <span className="text-green-400">createAmazing</span><span className="text-gray-300">(</span><span className="text-orange-300">idea</span><span className="text-gray-300">)</span> <span className="text-gray-300">{'{'}</span></div>
                      <div>&nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-orange-300">skills</span> <span className="text-gray-300">=</span> <span className="text-gray-300">[</span><span className="text-green-300">'React'</span><span className="text-gray-300">,</span> <span className="text-green-300">'Node.js'</span><span className="text-gray-300">,</span> <span className="text-green-300">'TypeScript'</span><span className="text-gray-300">];</span></div>
                      <div>&nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-orange-300">passion</span> <span className="text-gray-300">=</span> <span className="text-purple-300">100</span><span className="text-gray-300">;</span></div>
                      <div>&nbsp;&nbsp;</div>
                      <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-gray-300">{'{'}</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">deliver:</span> <span className="text-blue-400">()</span> <span className="text-gray-300">{'=>'}</span> <span className="text-green-300">{"`${idea} brought to life!`"}</span><span className="text-gray-300">,</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">onTime:</span> <span className="text-purple-300">true</span><span className="text-gray-300">,</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">withStyle:</span> <span className="text-purple-300">true</span><span className="text-gray-300">,</span></div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">creativity:</span> <span className="text-orange-300">passion</span></div>
                      <div>&nbsp;&nbsp;<span className="text-gray-300">{'};'}</span></div>
                      <div><span className="text-gray-300">{'}'}</span></div>
                    </div>
                  </div>
                  
                  {/* Blinking cursor effect */}
                  <div className="absolute bottom-5 right-5 h-4 w-2 bg-brand-purple animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
