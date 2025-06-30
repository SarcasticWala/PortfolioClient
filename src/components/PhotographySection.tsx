
import React from 'react';
import { Camera } from 'lucide-react';
import LazyImage from './LazyImage';

const PhotographySection = () => {
  const photos = [
    {
      id: 1,
      title: "Portrait Session",
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80",
      category: "Portrait"
    },
    {
      id: 2,
      title: "Nature Landscape",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Landscape"
    },
    {
      id: 3,
      title: "Street Photography",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Street"
    },
    {
      id: 4,
      title: "Event Photography",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      category: "Event"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-amber-500 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Photography Projects</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Freezing moments in time with artistic precision and emotional depth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-square">
                <LazyImage
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-amber-500 text-black px-2 py-1 rounded text-sm font-semibold mb-2 inline-block">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
