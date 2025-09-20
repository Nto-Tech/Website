import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed', icon: Target },
    { number: '9+', label: 'Happy Clients', icon: Users },
    { number: '1+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Lightbulb },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              About Ntotech
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate developers and designers who believe in the power of 
              technology to transform businesses and create meaningful experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Ntotech, we're dedicated to pushing the boundaries of what's possible in 
                digital innovation. We combine cutting-edge technology with creative design 
                to deliver solutions that not only meet but exceed expectations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every project we undertake is an opportunity to create something extraordinary, 
                something that makes a real difference in how businesses operate and how users 
                interact with technology.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Innovation First</h4>
                      <p className="text-gray-400">Always exploring new possibilities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Client Focused</h4>
                      <p className="text-gray-400">Your success is our priority</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Quality Driven</h4>
                      <p className="text-gray-400">Excellence in every detail</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ number, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{number}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;