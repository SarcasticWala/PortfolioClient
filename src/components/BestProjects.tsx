import React from 'react';
import LazyImage from './LazyImage';

const BestProjects = () => {
  const bestProjects = [
    {
      id: 1,
      title: "Award-Winning Wedding Film",
      description: "A cinematic masterpiece capturing the magic of love",
      image: "/wedding-film.jpg", // moved to public/
      type: "Video",
      award: "Best Wedding Film 2024"
    },
    {
      id: 2,
      title: "Featured Portrait Series",
      description: "Intimate portraits showcasing human emotion and connection",
      image: "/portrait-series.jpg", // moved to public/
      type: "Photography",
      award: "Portrait Excellence Award"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Best Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing award-winning work that defines excellence in visual storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {bestProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {project.type}
                      </span>
                      <span className="text-amber-500 text-sm font-semibold">
                        {project.award}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
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

export default BestProjects;
