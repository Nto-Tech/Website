import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Megaphone, Database, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and applications with clean code, responsive design, and modern frameworks.',
      features: [
        'Responsive Website Design',
        'Custom Web Applications',
        'E-commerce Solutions',
        'API Development & Integration',
        'SEO Friendly Websites',
        'Maintenance & Support'
      ],
      technologies: ['React', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      color: 'from-purple-600 to-blue-600',
      price: 'Starting at ₹40,000',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creative and user-friendly designs that make your product visually stunning and easy to use.',
      features: [
        'Wireframing & Prototyping',
        'Mobile-first Design',
        'Interactive Prototypes',
        'Brand Identity & Style Guides',
        'Accessibility Standards',
        'User Testing & Feedback'
      ],
      technologies: ['Figma', 'Adobe XD', 'Canva'],
      color: 'from-blue-600 to-cyan-600',
      price: 'Starting at ₹25,000',
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Smart IoT applications and integrations to connect devices, sensors, and analytics.',
      features: [
        'IoT Hardware & Circuit Design',
        'Device-to-Cloud Communication',
        'Data Monitoring Dashboards',
        'Embedded Systems Programming',
        'Sensor Integration',
        'Automation Solutions'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'MQTT'],
      color: 'from-cyan-600 to-teal-600',
      price: 'Starting at ₹50,000',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Grow your brand visibility with tailored digital marketing campaigns.',
      features: [
        'Social Media Marketing',
        'Search Engine Optimization (SEO)',
        'Pay Per Click (PPC)',
        'Content Marketing',
        'Email Campaigns',
        'Brand Promotions'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn'],
      color: 'from-teal-600 to-green-600',
      price: 'Starting at ₹20,000',
    },
    {
      icon: Database,
      title: 'Data & Visualization Services',
      description: 'Transform data into insights with analytics and visualization tools.',
      features: [
        'Data Cleaning & Processing',
        'Interactive Dashboards',
        'Business Intelligence Reports',
        'Excel & Power BI Analysis',
        'Database Optimization',
        'Real-time Data Tracking'
      ],
      technologies: ['Excel', 'Power BI', 'SQL', 'Python'],
      color: 'from-green-600 to-purple-600',
      price: 'Starting at ₹30,000',
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'End-to-end web and software development for startups and enterprises.',
      features: [
        'Frontend & Backend Integration',
        'Database Management',
        'REST APIs & Authentication',
        'Cloud Deployment',
        'Microservices Architecture',
        'Scalable Solutions'
      ],
      technologies: ['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB'],
      color: 'from-orange-600 to-red-600',
      price: 'Starting at ₹60,000',
    },
  ];

  const process = [
    { step: '01', title: 'Discovery & Planning', description: 'Understanding your goals, audience, and requirements.' },
    { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes, mockups, and interactive prototypes.' },
    { step: '03', title: 'Development', description: 'Building your product with modern technologies.' },
    { step: '04', title: 'Testing & QA', description: 'Ensuring performance, security, and cross-platform support.' },
    { step: '05', title: 'Launch & Support', description: 'Deployment with ongoing monitoring and updates.' },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              At <span className="text-purple-400 font-semibold">Ntotech</span>, we deliver top-notch solutions
              in web, IoT, data, and digital marketing with a focus on growth and innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 h-full hover:border-purple-500/40 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Process
              </h2>
              <p className="text-xl text-gray-400">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {process.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
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

export default ServicesPage;
