"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Camera, 
  MapPin, 
  Eye, 
  Home, 
  Zap, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "360 Virtual Tours",
    description: "Immersive panoramic tours that let customers explore every corner of your business from anywhere.",
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description: "Boost your visibility on Google Maps with integrated virtual tours and optimized business listings.",
  },
  {
    icon: Eye,
    title: "Business Visibility",
    description: "Stand out from competitors with stunning visual content that captures attention instantly.",
  },
  {
    icon: Home,
    title: "Real Estate Photography",
    description: "Professional photography and virtual staging for properties that sell faster.",
  },
  {
    icon: Zap,
    title: "Digital Upgrades",
    description: "Modernize your online presence with cutting-edge digital solutions and interactive content.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Profit Optimization",
    description: "Data-driven insights to maximize engagement and convert viewers into customers.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Everything You Need to{" "}
            <span className="text-primary">Stand Out</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From virtual tours to analytics, we provide comprehensive solutions to elevate your business presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
