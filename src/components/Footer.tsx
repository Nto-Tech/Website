import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'IoT Solutions',
    'Digital Marketing',
    'Data & Visualization',
    'Full-Stack Development',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Github, href: '#', color: 'hover:text-gray-300' },
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo */}
              <motion.img
                whileHover={{ rotate: 15, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://avatars.githubusercontent.com/u/225167413?s=400&u=1bc6633f80ad7852da4a890021ef15211386c451&v=4"
                alt="Ntotech Logo"
                className="h-12 w-12 rounded-full border-2 border-purple-500 shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ntotech
                </span>
                <span className="text-xs text-gray-400">Imagine. Build. Grow.</span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We transform innovative ideas into powerful digital solutions. 
              From concept to deployment, we build the future of technology.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-gray-800/50 rounded-lg text-gray-400 ${color} transition-colors duration-300`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a 
                  href="mailto:info@ntotech.com" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  info@nto-tech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  +91 79954 65566
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400 text-sm">
                  KPHB, Telangana, 500072
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © 2024 Ntotech. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
