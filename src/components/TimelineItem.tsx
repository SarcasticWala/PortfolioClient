
import React from 'react';
import { Timeline } from '../models/UserModel';

interface TimelineItemProps {
  item: Timeline;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'bg-amber-500';
      case 'milestone':
        return 'bg-blue-500';
      case 'project':
        return 'bg-green-500';
      default:
        return 'bg-amber-500';
    }
  };

  return (
    <div className="flex items-start space-x-6 group" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} relative z-10 group-hover:scale-125 transition-transform duration-300`} />
        {!isLast && <div className="w-0.5 h-16 bg-gray-700 mt-2" />}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-amber-500/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-amber-500 font-bold text-xl">{item.year}</span>
            <span className={`px-2 py-1 text-xs rounded-full text-white ${getTypeColor(item.type)}`}>
              {item.type}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
