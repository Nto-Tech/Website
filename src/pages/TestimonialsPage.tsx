import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ntotech transformed our vision into reality with their exceptional web development skills. The team delivered beyond our expectations with a modern, responsive website that perfectly represents our brand.',
      project: 'Corporate Website Redesign',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Digital Solutions Co.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Ntotech was an absolute pleasure. Their mobile app development expertise helped us launch a successful product that our users love. The attention to detail and user experience is outstanding.',
      project: 'Mobile App Development',
      industry: 'E-commerce'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The UI/UX design services provided by Ntotech were exceptional. They created a beautiful, intuitive interface that significantly improved our user engagement and conversion rates.',
      project: 'UI/UX Design Overhaul',
      industry: 'SaaS'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'HealthTech Solutions',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ntotech delivered a robust healthcare management system that streamlined our operations. Their technical expertise and understanding of our industry requirements were impressive.',
      project: 'Healthcare Management Platform',
      industry: 'Healthcare'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'CTO',
      company: 'FinanceFlow',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The cloud migration services provided by Ntotech were seamless. They helped us modernize our infrastructure while ensuring zero downtime and improved performance.',
      project: 'Cloud Migration & Optimization',
      industry: 'Finance'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Operations Director',
      company: 'RetailMax',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Our e-commerce platform built by Ntotech has exceeded all expectations. The performance optimization and user experience improvements led to a 40% increase in sales.',
      project: 'E-commerce Platform Development',
      industry: 'Retail'
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '10+', label: 'Successful Projects' },
    { number: '9+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about 
              their experience working with Ntotech.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                  
                  {/* Testimonial Text */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-purple-400 text-sm">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex justify-center space-x-8 text-sm">
                      <div>
                        <span className="text-gray-400">Project: </span>
                        <span className="text-purple-400">{testimonials[currentTestimonial].project}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Industry: </span>
                        <span className="text-purple-400">{testimonials[currentTestimonial].industry}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-purple-600/20 rounded-full text-purple-400 hover:bg-purple-600/40 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-purple-600/20 rounded-full text-purple-400 hover:bg-purple-600/40 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-purple-400'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full"
                >
                  {/* Rating */}
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-purple-400 text-xs">{testimonial.role}</p>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Project Tag */}
                  <div className="pt-4 border-t border-gray-700">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {testimonial.project}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-gray-400 mb-6">
                Let's work together to create something amazing that your customers will love.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;