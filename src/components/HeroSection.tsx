import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video } from 'lucide-react';
import pic from '../../public/assets/img.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    'Visual Storyteller',
    'Creative Director',
    'Moment Curator',
    'Art Creator',
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 flex items-center justify-center overflow-hidden bg-transparent">
      {/* No Vanta background, just plain transparent */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Hello */}
          <div className="mb-3 sm:mb-4 opacity-0 translate-y-3 transition-opacity duration-1000 ease-out delay-200 animate-fade-in">
            <span className="text-amber-400 text-3xl sm:text-lg font-extrabold tracking-wide">
              Hello, I'm
            </span>
          </div>

          {/* Photo */}
          <div className="flex justify-center mb-5 sm:mb-8">
            <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg shadow-amber-400/20">
              <img
                src={pic}
                alt="Ayan Das"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">Ayan</span>
            <span className="text-amber-400 ml-2 sm:ml-4">Das</span>
          </h1>

          {/* Rotating Role */}
          <div className="mb-4 sm:mb-6 h-10 sm:h-16 flex items-center justify-center">
            <div className="text-lg sm:text-2xl md:text-4xl font-light text-gray-300">
              <span>I'm a </span>
              <span className="text-amber-400 font-semibold transition-all duration-200 inline-block">
                {texts[currentText]}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
            Capturing life's most precious moments through the art of photography and videography.
            Every frame tells a story, every shot preserves a memory.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-14 px-2">
            <Link
              to="/portfolio"
              className="group bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Camera className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              View My Work
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-amber-500 text-amber-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Video className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Let's Create Together
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 px-2">
            {[
              { label: 'Projects Done', value: '500+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Support', value: '24/7' },
            ].map((item) => (
              <div className="text-center" key={item.label}>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-1 sm:mb-2">
                  {item.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
