import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Zap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo Animation */}
        {/* Logo Animation */}
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="mb-8 flex justify-center"
>
  <div className="relative">
    {/* Glowing rotating background */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-70"
    />
    {/* Circle Logo */}
    <div className="relative bg-gray-900 p-2 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
      <img
        src="https://avatars.githubusercontent.com/u/225167413?s=400&u=1bc6633f80ad7852da4a890021ef15211386c451&v=4"
        alt="Ntotech Logo"
        className="h-24 w-24 rounded-full object-cover"
      />
    </div>
  </div>
</motion.div>


        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
        >
          Ntotech
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 space-y-2"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-4">
            Imagine. Build. Grow.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We transform innovative ideas into powerful digital solutions. From concept to deployment, 
            we build the future of technology with cutting-edge development and creative excellence.
          </p>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          {[
            { icon: Rocket, text: 'Innovation' },
            { icon: Code, text: 'Development' },
            { icon: Zap, text: 'Performance' },
          ].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30 mb-2">
                <Icon className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-600/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;