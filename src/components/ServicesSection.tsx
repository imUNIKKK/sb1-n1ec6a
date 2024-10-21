import React from 'react';
import { Activity, FileText, Users, Cpu, ExternalLink, ChevronRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, action }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
    <Icon className="h-12 w-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {action}
  </div>
);

const ActionButton = ({ href, text, icon: IconComponent }) => (
  <a
    href={href}
    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover-primary button-transition mt-2"
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    {text}
    <IconComponent className="ml-2 h-4 w-4" />
  </a>
);

const ServicesSection = () => {
  // ... (rest of the component remains the same)
};

export default ServicesSection;