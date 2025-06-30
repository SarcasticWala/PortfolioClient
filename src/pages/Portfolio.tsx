
import React, { useState } from 'react';
import LazyImage from '../components/LazyImage';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Wedding Ceremony', category: 'wedding', type: 'photography', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2052&q=80' },
    { id: 2, title: 'Corporate Event', category: 'event', type: 'video', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' },
    { id: 3, title: 'Portrait Session', category: 'portrait', type: 'photography', image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80' },
    { id: 4, title: 'Music Video', category: 'commercial', type: 'video', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 5, title: 'Nature Landscape', category: 'landscape', type: 'photography', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 6, title: 'Brand Campaign', category: 'commercial', type: 'video', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80' }
  ];

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'photography', name: 'Photography' },
    { id: 'video', name: 'Video' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photography' || activeFilter === 'video') {
      return project.type === activeFilter;
    }
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">My</span>
            <span className="text-amber-500 ml-3">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my finest work in photography and videography, 
            showcasing diverse projects and creative excellence.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/3]">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold capitalize">
                          {project.type}
                        </span>
                        <span className="text-amber-500 text-sm font-semibold capitalize">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
