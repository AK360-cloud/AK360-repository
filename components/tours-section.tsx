"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink } from "lucide-react";

const tours = [
  {
    title: "Luxury Salon",
    category: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    views: "12.5K",
  },
  {
    title: "Artisan Café",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    views: "8.2K",
  },
  {
    title: "Modern Gym",
    category: "Fitness & Health",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    views: "15.8K",
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    views: "22.1K",
  },
];

export default function ToursSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Featured Tours</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Explore Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Step into these businesses virtually and experience the quality of our 360° tours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Play Button */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:bg-primary transition-colors">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </motion.div>

                {/* Views Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground">
                  {tour.views} views
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{tour.category}</span>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-semibold text-foreground">{tour.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold hover:bg-secondary/80 transition-all text-foreground"
          >
            View All Tours
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
