"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "360 Virtual Tours", href: "#services" },
      { label: "Google Maps", href: "#services" },
      { label: "Real Estate", href: "#services" },
      { label: "Analytics", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#why" },
      { label: "Portfolio", href: "#tours" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute inset-0 border-t border-border/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-bold text-lg">AK</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                AK <span className="text-primary">360</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforming businesses with immersive 360° virtual tours. Experience locations before you visit.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AK 360. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
