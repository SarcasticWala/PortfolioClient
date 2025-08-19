import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (!window.VANTA?.BIRDS) {
        // If VANTA is not loaded yet, retry after a delay
        setTimeout(initVanta, 500);
        return;
      }

      if (effectRef.current) return;

      effectRef.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: 0xeb7f19,
        color2: 0xffa500,
        colorMode: "variance",
        birdSize: 1.5,
        wingSpan: 40.0,
        speedLimit: 5.0,
        separation: 100.0,
        alignment: 100.0,
        cohesion: 100.0,
        quantity: 3,
        backgroundAlpha: 1
      });
    };

    initVanta();

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="min-h-screen w-full relative bg-black"
      style={{ zIndex: 0 }}
    >
      {children}
    </div>
  );
}
