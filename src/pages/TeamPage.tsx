import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years of experience in tech innovation and business strategy.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Leadership', 'Strategy', 'Innovation', 'Business Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@ntotech.com'
      }
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Technical architect with expertise in scalable systems and emerging technologies.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['System Architecture', 'Cloud Computing', 'AI/ML', 'DevOps'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@ntotech.com'
      }
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Lead Frontend Developer',
      bio: 'Creative developer passionate about building beautiful and functional user interfaces.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'michael@ntotech.com'
      }
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Senior Backend Developer',
      bio: 'Backend specialist focused on building robust and scalable server-side solutions.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Node.js', 'Python', 'Database Design', 'API Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@ntotech.com'
      }
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Mobile App Developer',
      bio: 'Mobile development expert creating native and cross-platform applications.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@ntotech.com'
      }
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'UI/UX Designer',
      bio: 'Design thinking advocate creating intuitive and engaging user experiences.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'lisa@ntotech.com'
      }
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring smooth deployment and operations.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'james@ntotech.com'
      }
    },
    {
      id: 8,
      name: 'Maria Garcia',
      role: 'Project Manager',
      bio: 'Agile project management expert ensuring timely and successful project delivery.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Agile', 'Scrum', 'Project Planning', 'Team Coordination'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'maria@ntotech.com'
      }
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies.',
      icon: '💡'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and communication.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in everything we do.',
      icon: '⭐'
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and improvement.',
      icon: '📈'
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of talented professionals brings together expertise, creativity, 
              and passion to deliver exceptional results for our clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="p-2 bg-sky-500 rounded-full text-white hover:bg-sky-600 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide our team and drive our success
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
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Amazing Team
              </h2>
              <p className="text-gray-400 mb-6">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;