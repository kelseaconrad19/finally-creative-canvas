
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Main background with diagonal design */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00cc00] to-[#00aa00] -z-10"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white -z-10" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-60 -z-5"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start relative">
            {/* Illustrated character */}
            <div className="relative w-64 h-64 mb-6 lg:mb-0">
              <img 
                src="/lovable-uploads/0fdacbfa-a8dc-4ddb-95a5-41a84ee8a3cd.png" 
                alt="Creative character" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Styled heading with playful typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold italic mb-2 text-[#00cc00]" style={{ fontFamily: 'cursive' }}>
              Finally<span className="text-brand-orange">Creative</span>.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Where Function Meets Imagination
            </p>
            
            {/* CTA button styled similar to the example */}
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 bg-[#00cc00] hover:bg-[#00aa00] text-white border-2 border-white flex items-center gap-2"
            >
              LET'S CREATE TOGETHER!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Code snippet section from original design */}
            <div className="hidden lg:block mt-12">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-brand-orange/20 rounded-2xl animate-float"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg">
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
