import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video } from 'lucide-react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

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

  useEffect(() => {
    if (
      !vantaEffect.current &&
      window.VANTA &&
      window.VANTA.BIRDS &&
      vantaRef.current
    ) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x07192f,
        backgroundAlpha: 1,
        color1: 0xff0000,
        color2: 0x00d1ff,
        colorMode: 'varianceGradient',
        quantity: 4,
        birdSize: 1,
        wingSpan: 30,
        speedLimit: 5,
        separation: 20,
        alignment: 37,
        cohesion: 20,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      id="animation-bg"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/90 z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
     <div className="mb-4 sm:mb-6 opacity-0 translate-y-3 transition-opacity duration-1000 ease-out delay-200 animate-fade-in">
  <span className="text-amber-400 text-base sm:text-lg font-medium tracking-wide">
    Hello, I'm
  </span>
</div>


          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">Ayan</span>
            <span className="text-amber-400 ml-2 sm:ml-4">Das</span>
          </h1>

          <div className="mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center">
            <div className="text-xl sm:text-2xl md:text-4xl font-light text-gray-300">
              <span>I'm a </span>
              <span className="text-amber-400 font-semibold transition-all duration-200 inline-block">
                {texts[currentText]}
              </span>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            Capturing life's most precious moments through the art of photography and videography. 
            Every frame tells a story, every shot preserves a memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: 'Projects Done', value: '500+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Support', value: '24/7' },
            ].map((item) => (
              <div className="text-center" key={item.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-1 sm:mb-2">
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
