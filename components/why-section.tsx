"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, TrendingUp, Users, Globe, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Visibility",
    description: "Get discovered by more customers searching for businesses like yours online.",
  },
  {
    icon: Users,
    title: "Boost Engagement",
    description: "Virtual tours keep visitors on your page 5x longer than static images.",
  },
  {
    icon: Globe,
    title: "24/7 Open House",
    description: "Let customers explore your business anytime, from anywhere in the world.",
  },
  {
    icon: Award,
    title: "Build Trust",
    description: "Transparency through virtual tours builds customer confidence before they visit.",
  },
];

const stats = [
  { value: "67%", label: "More likely to visit after viewing a virtual tour" },
  { value: "95%", label: "Of customers prefer businesses with virtual tours" },
  { value: "3x", label: "Increase in online engagement and inquiries" },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why AK 360</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Transform How Customers{" "}
            <span className="text-primary">Discover You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            In today&apos;s digital world, virtual tours are no longer optional—they&apos;re essential for businesses that want to stand out.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-5 glass-card rounded-2xl p-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">What You Get with AK 360</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Professional 360° Photography",
              "Google Maps Integration",
              "QR Code Access",
              "Unlimited Views",
              "Analytics Dashboard",
              "Mobile Optimized",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground"
              >
                <Check className="w-4 h-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
