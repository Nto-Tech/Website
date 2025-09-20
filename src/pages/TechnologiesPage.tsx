import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const TechnologiesPage = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = [
    {
      title: 'Frontend Technologies',
      color: 'from-purple-600 to-blue-600',
      technologies: [
        { name: 'React', icon: '⚛️', description: 'Modern UI library for building interactive interfaces', level: 95 },
        { name: 'Vue.js', icon: '💚', description: 'Progressive framework for building user interfaces', level: 90 },
        { name: 'Angular', icon: '🅰️', description: 'Platform for building mobile and desktop web applications', level: 85 },
        { name: 'TypeScript', icon: '📘', description: 'Typed superset of JavaScript', level: 92 },
        { name: 'Next.js', icon: '▲', description: 'React framework for production', level: 88 },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework', level: 95 },
      ]
    },
    {
      title: 'Backend Technologies',
      color: 'from-blue-600 to-cyan-600',
      technologies: [
        { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime built on Chrome V8 engine', level: 93 },
        { name: 'Python', icon: '🐍', description: 'High-level programming language', level: 90 },
        { name: 'Express.js', icon: '🚀', description: 'Fast, unopinionated web framework for Node.js', level: 92 },
        { name: 'Django', icon: '🎸', description: 'High-level Python web framework', level: 85 },
        { name: 'GraphQL', icon: '📊', description: 'Query language for APIs', level: 88 },
        { name: 'REST APIs', icon: '🔗', description: 'Representational State Transfer architecture', level: 95 },
      ]
    },
    {
      title: 'Mobile Development',
      color: 'from-cyan-600 to-teal-600',
      technologies: [
        { name: 'React Native', icon: '📱', description: 'Build native apps using React', level: 90 },
        { name: 'Flutter', icon: '🦋', description: 'Google UI toolkit for building natively compiled applications', level: 87 },
        { name: 'Swift', icon: '🍎', description: 'Programming language for iOS development', level: 82 },
        { name: 'Kotlin', icon: '🤖', description: 'Modern programming language for Android', level: 80 },
        { name: 'Ionic', icon: '⚡', description: 'Cross-platform mobile app development', level: 85 },
        { name: 'Xamarin', icon: '🔷', description: 'Microsoft cross-platform development', level: 75 },
      ]
    },
    {
      title: 'Database & Cloud',
      color: 'from-teal-600 to-green-600',
      technologies: [
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database', level: 92 },
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced open source relational database', level: 90 },
        { name: 'MySQL', icon: '🐬', description: 'Popular open-source relational database', level: 88 },
        { name: 'AWS', icon: '☁️', description: 'Amazon Web Services cloud platform', level: 85 },
        { name: 'Docker', icon: '🐳', description: 'Containerization platform', level: 87 },
        { name: 'Firebase', icon: '🔥', description: 'Google mobile and web application development platform', level: 90 },
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'from-green-600 to-purple-600',
      technologies: [
        { name: 'Git', icon: '📝', description: 'Distributed version control system', level: 95 },
        { name: 'GitHub Actions', icon: '⚙️', description: 'CI/CD platform', level: 88 },
        { name: 'Jenkins', icon: '🔧', description: 'Open source automation server', level: 82 },
        { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration platform', level: 80 },
        { name: 'Terraform', icon: '🏗️', description: 'Infrastructure as code tool', level: 78 },
        { name: 'Nginx', icon: '🌐', description: 'Web server and reverse proxy', level: 85 },
      ]
    },
    {
      title: 'Design & UI/UX',
      color: 'from-pink-600 to-purple-600',
      technologies: [
        { name: 'Figma', icon: '🎨', description: 'Collaborative interface design tool', level: 93 },
        { name: 'Adobe XD', icon: '🎭', description: 'Vector-based user experience design tool', level: 88 },
        { name: 'Sketch', icon: '💎', description: 'Digital design toolkit', level: 85 },
        { name: 'Framer', icon: '🖼️', description: 'Interactive design and prototyping', level: 82 },
        { name: 'Principle', icon: '🎪', description: 'Animated and interactive user interface design', level: 80 },
        { name: 'InVision', icon: '👁️', description: 'Digital product design platform', level: 85 },
      ]
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technologies We Use
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and industry best practices to deliver 
              robust, scalable, and innovative solutions for our clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
              <div className="space-y-8">
                <motion.h2 
                  className={`text-3xl font-bold text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </motion.h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                      }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
                    >
                      {/* Tech Icon */}
                      <motion.div
                        animate={{ 
                          rotate: hoveredTech === tech.name ? 360 : 0,
                          scale: hoveredTech === tech.name ? 1.2 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl mb-4 text-center"
                      >
                        {tech.icon}
                      </motion.div>

                      {/* Tech Name */}
                      <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-purple-300 transition-colors">
                        {tech.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                        {tech.description}
                      </p>

                      {/* Skill Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Proficiency</span>
                          <span className="text-xs text-purple-400 font-semibold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>

                      {/* Floating Animation */}
                      <motion.div
                        animate={{
                          y: hoveredTech === tech.name ? [-2, 2, -2] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredTech === tech.name ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 pointer-events-none"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-center text-white mb-8">
                Our Technical Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '50+', label: 'Technologies Mastered' },
                  { number: '100+', label: 'Projects Delivered' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '24/7', label: 'Technical Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;