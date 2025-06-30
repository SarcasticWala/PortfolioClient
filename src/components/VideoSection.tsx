
import React from 'react';
import { Video } from 'lucide-react';
import LazyImage from './LazyImage';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Wedding Highlight Reel",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2052&q=80",
      category: "Wedding"
    },
    {
      id: 2,
      title: "Corporate Event Coverage",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Music Video Production",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Music"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Video className="text-amber-500 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-white">Video Projects</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bringing stories to life through cinematic excellence and creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
                <LazyImage
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Video size={24} className="text-black ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors duration-200">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
