
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const getBackgroundColor = (idx: number) => {
    const colors = [
      'bg-gradient-to-br from-brand-purple/10 to-brand-purple/5',
      'bg-gradient-to-br from-brand-orange/10 to-brand-orange/5',
      'bg-gradient-to-br from-brand-blue/10 to-brand-blue/5',
    ];
    return colors[idx % colors.length];
  };

  const getIconColor = (idx: number) => {
    const colors = [
      'text-brand-purple',
      'text-brand-orange',
      'text-brand-blue',
    ];
    return colors[idx % colors.length];
  };

  const getBorderColor = (idx: number) => {
    const colors = [
      'group-hover:border-brand-purple/50',
      'group-hover:border-brand-orange/50',
      'group-hover:border-brand-blue/50',
    ];
    return colors[idx % colors.length];
  };

  return (
    <div className={`group p-8 rounded-xl ${getBackgroundColor(index)} border border-transparent transition-all ${getBorderColor(index)}`}>
      <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-6 ${getIconColor(index)}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
