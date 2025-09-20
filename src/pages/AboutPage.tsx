import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Heart, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for technology and design drives us to create exceptional experiences.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions reach users worldwide, making a positive difference in their lives.',
    },
  ];

  const timeline = [
    { year: '2025', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2025', title: 'First Major Project', description: 'Delivered our first enterprise-level application' },
    { year: '2025', title: 'Team Expansion', description: 'Grew our team to include specialized experts' },
    { year: '2025', title: 'Global Reach', description: 'Expanded services to international clients' },
    // { year: '2025', title: 'Innovation Awards', description: 'Recognized for outstanding technical achievements' },
    { year: '2025', title: 'Future Forward', description: 'Continuing to shape the future of technology' },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Ntotech
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We are more than just a technology company. We are dreamers, builders, and innovators 
              who believe in the transformative power of well-crafted digital experiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  To empower businesses and individuals through innovative technology solutions 
                  that simplify complexity and enhance human potential.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We strive to be the bridge between imagination and reality, turning visionary 
                  ideas into powerful digital experiences that drive growth and success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  To be the world's most trusted partner for digital transformation, 
                  creating solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We envision a future where technology seamlessly integrates with human creativity 
                  to unlock infinite possibilities.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-4"
                  >
                    <value.icon className="h-8 w-8 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400">
                Key milestones in our growth and evolution
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-6 p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;