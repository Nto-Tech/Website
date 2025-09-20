import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Megaphone, BarChart3, Layers } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'API Integration', 'SEO Friendly'],
      color: 'from-purple-600 to-blue-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Engaging and user-friendly designs that enhance user experiences.',
      features: ['Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Innovative IoT solutions integrating hardware and software for smart systems.',
      features: ['Circuit Design', 'IoT Prototyping', 'Cloud Integration', 'Device Management'],
      color: 'from-cyan-600 to-teal-600',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Effective strategies to grow your brand presence online.',
      features: ['Social Media Marketing', 'Content Strategy', 'SEO & SEM', 'Brand Growth'],
      color: 'from-teal-600 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Data & Visualization',
      description: 'Transform raw data into powerful insights and interactive dashboards.',
      features: ['Power BI', 'Data Analysis', 'Custom Dashboards', 'Reports'],
      color: 'from-green-600 to-purple-600',
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Robust end-to-end applications covering frontend and backend.',
      features: ['React/Node.js', 'PHP/MySQL', 'REST APIs', 'Authentication'],
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At Ntotech, we provide a wide range of technology and digital solutions to help your business grow.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                }}
                className="group h-full bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 relative"
              >
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-full`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
