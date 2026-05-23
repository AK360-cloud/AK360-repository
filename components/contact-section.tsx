"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 text-center glow">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8 border border-primary/30"
            >
              <span className="text-3xl font-bold text-primary">AK</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground text-balance">
              Put Your Business on{" "}
              <span className="text-primary">AK 360</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Ready to transform how customers experience your business? Get in touch today and let&apos;s create an immersive 360° tour that sets you apart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:hello@ak360.com"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 glass-card rounded-full font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 text-foreground"
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                hello@ak360.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Worldwide Service
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
