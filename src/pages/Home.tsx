
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import LazyImage from '../components/LazyImage';
import HeroSection from '../components/HeroSection';

const VideoSection = lazy(() => import('../components/VideoSection'));
const PhotographySection = lazy(() => import('../components/PhotographySection'));
const BestProjects = lazy(() => import('../components/BestProjects'));

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Video Projects Section */}
      <Suspense fallback={<Loader />}>
        <VideoSection />
      </Suspense>

      {/* Photography Projects Section */}
      <Suspense fallback={<Loader />}>
        <PhotographySection />
      </Suspense>

      {/* Best Projects Section */}
      <Suspense fallback={<Loader />}>
        <BestProjects />
      </Suspense>
    </div>
  );
};

export default Home;
