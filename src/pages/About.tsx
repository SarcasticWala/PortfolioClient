
import React from 'react';
import { useUserData } from '../hooks/useUserData';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialMediaCard from '../components/SocialMediaCard';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';
import Loader from '../components/Loader';
import LazyImage from '../components/LazyImage';
import AboutHero from '../components/HeroSectionAbout';

const About = () => {
  const { user, skills, timeline, loading } = useUserData();

  if (loading || !user) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
   <AboutHero user={user} />


      {/* Social Media Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Connect With Me</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Follow my journey and stay updated with my latest work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {user.socialMedia.map((social, index) => (
              <SocialMediaCard key={social.platform} socialMedia={social} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combining technical expertise with creative vision to deliver outstanding results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Key milestones that shaped my creative career
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem 
                key={item.year} 
                item={item} 
                index={index} 
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-400/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to bring your vision to life? Get in touch and let's create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`mailto:${user.email}`}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Send Email
              </a>
              <a 
                href={`tel:${user.phone}`}
                className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
