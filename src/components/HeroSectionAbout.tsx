// src/components/AboutHero.tsx
import React, { useEffect, useRef } from 'react';
import LazyImage from './LazyImage';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface AboutHeroProps {
  user: {
    title: string;
    bio: string;
    experience: string;
    location: string;
  };
}

const AboutHero: React.FC<AboutHeroProps> = ({ user }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (
      !vantaEffect.current &&
      window.VANTA &&
      window.VANTA.NET &&
      vantaRef.current
    ) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x5f3fff,
        backgroundColor: 0x23153c,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 19.0,
        showDots: true,
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
    <section ref={vantaRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-white">About</span>
                <span className="text-amber-500 ml-3">Me</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-500">{user.title}</h2>
              <p className="text-xl text-gray-300 leading-relaxed">{user.bio}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-500">{user.experience}</div>
                <div className="text-sm text-white uppercase tracking-wide">Experience</div>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <div className="text-lg font-semibold text-amber-500">{user.location}</div>
                <div className="text-sm text-white uppercase tracking-wide">Based In</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-500/20">
              <LazyImage
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                alt="Professional Portrait"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-400 text-black p-6 rounded-2xl shadow-2xl">
              <div className="text-2xl font-bold">Available</div>
              <div className="text-sm font-semibold">For Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
