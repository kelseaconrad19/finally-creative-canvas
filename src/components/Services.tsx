
import React from 'react';
import ServiceCard from './ServiceCard';
import { Code, LucideRocket, Palette, Globe, Layout, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Custom Web Development',
      description: 'Bespoke websites and web applications built with cutting-edge technologies to meet your specific needs.',
    },
    {
      icon: <Layout size={28} />,
      title: 'Frontend Development',
      description: 'Responsive, interactive interfaces built with React and modern frameworks that provide exceptional user experiences.',
    },
    {
      icon: <Settings size={28} />,
      title: 'Backend Development',
      description: 'Robust, scalable APIs and server-side solutions built with Node.js and other modern technologies.',
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      description: 'Intuitive, beautiful designs that enhance user engagement and make your product stand out.',
    },
    {
      icon: <Globe size={28} />,
      title: 'E-commerce Solutions',
      description: 'Complete online shopping experiences with secure payment processing and inventory management.',
    },
    {
      icon: <LucideRocket size={28} />,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications with expert optimization and best practices implementation.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Expert Solutions For Your Digital Needs
          </h2>
          <p className="text-muted-foreground">
            I offer a comprehensive range of development services to bring your ideas to life with
            creativity, technical expertise, and attention to detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
