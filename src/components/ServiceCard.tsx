
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const getIconColor = (idx: number) => {
    const colors = [
      'text-brand-purple',
      'text-brand-orange',
      'text-brand-blue',
    ];
    return colors[idx % colors.length];
  };

  const getGlowEffect = (idx: number) => {
    const effects = [
      'hover:shadow-glow',
      'hover:shadow-glow-pink',
      'hover:shadow-glow-blue',
    ];
    return effects[idx % effects.length];
  };

  const getBorderEffect = (idx: number) => {
    const effects = [
      'hover:border-brand-purple/30',
      'hover:border-brand-pink/30',
      'hover:border-brand-blue/30',
    ];
    return effects[idx % effects.length];
  };

  return (
    <div className={`dark-glass p-8 rounded-xl transition-all duration-300 ${getBorderEffect(index)} ${getGlowEffect(index)}`}>
      <div className={`inline-flex items-center justify-center p-3 bg-background/60 rounded-lg mb-6 ${getIconColor(index)}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
