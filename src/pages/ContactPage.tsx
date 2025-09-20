import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon for Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost/NtoTech/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      const result = await response.text();
      console.log("PHP Response:", result);

      if (result.includes("success")) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        alert("❌ Failed: " + result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Error connecting to server");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", details: "info@nto-tech.com", subDetails: "support@nto-tech.com", color: "from-purple-600 to-blue-600" },
    { icon: Phone, title: "Call Us", details: "+91 79954 65566", subDetails: "+91 90149 08994", color: "from-blue-600 to-cyan-600" },
    { icon: MapPin, title: "Visit Us", details: "KPHB", subDetails: "Telangana, 500072", color: "from-cyan-600 to-teal-600" },
    { icon: Clock, title: "Business Hours", details: "Mon - Fri: 9AM - 6PM", subDetails: "Sat - Sun: 10AM - 4PM", color: "from-teal-600 to-green-600" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "IoT Solutions",
    "Digital Marketing",
    "Data & Visualization Services",
    "Full-Stack Development",
    "Consulting",
    "Other",
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Let's discuss how we can bring your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className="text-center p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className={`inline-flex p-4 bg-gradient-to-r ${info.color} rounded-full mb-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-purple-400 text-sm mb-1">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.subDetails}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300" placeholder="Your Company" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Needed</label>
                      <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none" placeholder="Tell us about your project..." />
                  </div>

                  <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" /> : <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Additional Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 h-64 overflow-hidden">
                  <MapContainer center={[17.385044, 78.486671]} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded-2xl">
                    <TileLayer attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[17.385044, 78.486671]} icon={customIcon}>
                      <Popup>Ntotech Office <br /> Digital City</Popup>
                    </Marker>
                  </MapContainer>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-600/20 rounded-lg">
                        <Mail className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a href="mailto:info@nto-tech.com" className="text-purple-400 hover:text-purple-300 transition-colors">info@nto-tech.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <Phone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <a href="tel:+919014908994" className="text-blue-400 hover:text-blue-300 transition-colors">+91 90149 08994</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-cyan-600/20 rounded-lg">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-cyan-400">KPHB, Telangana, 500072.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-gray-400 text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
