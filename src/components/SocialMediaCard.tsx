
import React from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Globe } from 'lucide-react';
import { SocialMedia } from '../models/UserModel';

interface SocialMediaCardProps {
  socialMedia: SocialMedia;
  index: number;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ socialMedia, index }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      Instagram,
      Youtube,
      Twitter,
      Linkedin,
      Globe
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Globe;
    return <IconComponent size={24} />;
  };

  return (
    <a
      href={socialMedia.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
          {getIcon(socialMedia.icon)}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{socialMedia.platform}</h3>
          <p className="text-amber-500 font-medium">{socialMedia.handle}</p>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </a>
  );
};

export default SocialMediaCard;
