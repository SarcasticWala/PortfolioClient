
import React, { useState, useEffect } from 'react';
import { Skill } from '../models/UserModel';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="space-y-3" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <span className="text-xs text-gray-400 uppercase tracking-wide">{skill.category}</span>
        </div>
        <span className="text-amber-500 font-bold text-xl">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
